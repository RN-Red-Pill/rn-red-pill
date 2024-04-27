#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

inquirer.prompt([
    {
        name: 'project-choice',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: fs.readdirSync(`${__dirname}/templates`),
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
            if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
            else return 'Project name may only include letters, numbers, underscores and hashes.';
        },
    },
    {
        type: 'checkbox',
        name: 'firebaseServices',
        message: 'Which Firebase services do you want to enable? ',
        choices: [
            {
                name: 'Analytics',
                value: 'analytics',
            },
            {
                name: 'Crashlytics',
                value: 'crashlytics',
            },
        ],
    },
]).then(async (answers) => {
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;
    const newProjectPath = `${CURR_DIR}/${projectName}`;

    const firebaseServices = answers.firebaseServices || [];

    fs.mkdirSync(newProjectPath);

    fs.copySync(templatePath, newProjectPath, {
        filter: (src, dest) => {
            const isAnalyticsSelected = firebaseServices.includes('analytics');
            const isCrashlyticsSelected = firebaseServices.includes('crashlytics');

            if (src.includes('libs/analytics')) {
                return isAnalyticsSelected;
            }
            if (src.includes('libs/crashlytics')) {
                return isCrashlyticsSelected;
            }

            return true;
        },
    });

    const packageJsonPath = `${newProjectPath}/package.json`;
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);
    
    if (!firebaseServices.includes('analytics')) {
        delete packageJson.dependencies['@react-native-firebase/analytics'];
    }
    if (!firebaseServices.includes('crashlytics')) {
        delete packageJson.dependencies['@react-native-firebase/crashlytics'];
    }

    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
});
