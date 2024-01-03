module.exports = {
  apps: [
    {
      name: "awss3",
      script: "ts-node",
      args: "-r ts-node/register /home/ubuntu/AWS_S3_Node_REST/src/index.ts",
      cwd: "/home/ubuntu/AWS_S3_Node_REST/",
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      instances: 1,
      exec_mode: "fork",
    },
    {
      name: "service1",
      script: "ts-node",
      args: "-r ts-node/register /home/ubuntu/nodejs-mysql-rest-api/src/index.ts",
      cwd: "/home/ubuntu/nodejs-mysql-rest-api/",
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      instances: 1,
      exec_mode: "fork",
    },
    // Add configurations for other services if needed
  ],
};
