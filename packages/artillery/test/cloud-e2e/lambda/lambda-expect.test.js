const tap = require('tap');
const { $ } = require('zx');
const chalk = require('chalk');
const fs = require('fs');
const { generateTmpReportPath, getTestTags } = require('../../cli/_helpers.js');

const tags = getTestTags(['type:acceptance']);
let reportFilePath;
tap.beforeEach(async (t) => {
  process.env.LAMBDA_IMAGE_VERSION = process.env.ECR_IMAGE_VERSION;
  process.env.RETAIN_LAMBDA = 'false';
  reportFilePath = generateTmpReportPath(t.name, 'json');
});

tap.test(
  'CLI should exit with non-zero exit code when there are failed expectations in container workers',
  async (t) => {
    try {
      await $`artillery run-lambda ${__dirname}/../fargate/fixtures/cli-exit-conditions/with-expect.yml --architecture x86_64 --record --tags ${tags} --output ${reportFilePath} --container --count 2`;
      t.fail(`Test "${t.name}" - Should have had non-zero exit code.`);
    } catch (output) {
      t.equal(output.exitCode, 1, 'CLI Exit Code should be 1');

      const report = JSON.parse(fs.readFileSync(reportFilePath, 'utf8'));
      t.equal(
        report.aggregate.counters['vusers.completed'],
        10,
        'Should have 10 total VUs'
      );

      t.equal(
        report.aggregate.counters['plugins.expect.failed'],
        10,
        'Should have 20 failed expectations'
      );

      t.equal(
        report.aggregate.counters['http.codes.200'],
        10,
        'Should have 10 "200 OK" responses'
      );
    }
  }
);
