module.exports = {
    preset: 'ts-jest',
    testEnviroment: 'node',
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts']
}