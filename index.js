#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            name: 'projectName',
            type: 'input',
            message: 'What\'s the code name for your mobile app? Choose wisely, for this is where the Matrix meets your mastery!',
            validate: function (input) {
                return /^([A-Za-z\-\\_\d])+$/.test(input) ? true : 'Project name may only include letters, numbers, underscores and hashes.';
            },
        },
        {
            name: 'projectChoice',
            type: 'list',
            message: 'JavaScript or TypeScript: the language of choice to bend reality in your React Native realm?',
            choices: [
                {
                    name: 'JavaScript',
                    value: 'red-pill-javascript',
                },
                {
                    name: 'TypeScript',
                    value: 'red-pill-typescript',
                },
            ]
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
    ]);
    return answers;
}

async function copyTemplateFiles(projectName, projectChoice, firebaseServices) {
    const templatePath = path.join(__dirname, 'templates', projectChoice);
    const newProjectPath = path.join(CURR_DIR, projectName);

    fs.mkdirSync(newProjectPath);
    fs.copySync(templatePath, newProjectPath, {
        filter: (src, dest) => {
            const isAnalyticsSelected = firebaseServices.includes('analytics');
            const isCrashlyticsSelected = firebaseServices.includes('crashlytics');

            if (src.includes(path.join('libs', 'analytics'))) {
                return isAnalyticsSelected;
            }
            if (src.includes(path.join('libs', 'crashlytics'))) {
                return isCrashlyticsSelected;
            }

            return !src.includes('ios');
        },
    });
}

async function updatePackageJson(projectName, firebaseServices) {
    const packageJsonPath = path.join(CURR_DIR, projectName, 'package.json');
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    const hasFirebaseServices = firebaseServices.length > 0;
    if (!hasFirebaseServices) {
        delete packageJson.dependencies['@react-native-firebase/app'];
    }

    if (!firebaseServices.includes('analytics')) {
        delete packageJson.dependencies['@react-native-firebase/analytics'];
    }
    if (!firebaseServices.includes('crashlytics')) {
        delete packageJson.dependencies['@react-native-firebase/crashlytics'];
    }

    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

(async () => {
    try {
        const { projectName, projectChoice, firebaseServices } = await promptUser();
        await copyTemplateFiles(projectName, projectChoice, firebaseServices);
        await updatePackageJson(projectName, firebaseServices);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
