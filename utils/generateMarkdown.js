// badges: https://shields.io/
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInfo) {
  return (licenseInfo != 'None' ? `\n![license](https://img.shields.io/badge/License-${licenseInfo.replaceAll(' ', '_').replaceAll('-', '_')}-red.svg)` : "");
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInfo) {
  return (licenseInfo != 'None' ? `\n- [License](#license)` : "");
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInfo) {
  return (licenseInfo != 'None' ? `\n\n## License\n\nThe license for this application: ${licenseInfo}` : "");
}

// function to generate markdown for README
function generateMarkdown({ titleProj, licenseInfo, descriptionProj, installInstructions, usageInstructions, urlRepo, contributeInfo, testsExamples, emailAddress, usernameGH }) {
  return `# ${titleProj}${renderLicenseBadge(licenseInfo)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(licenseInfo)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description\n\n${descriptionProj}

## Installation\n\n${installInstructions}

## Usage\n\n${usageInstructions}

Repository: ${urlRepo}${renderLicenseSection(licenseInfo)}

## Contributing\n\n${contributeInfo}

## Tests\n\n${testsExamples}

## Questions

GitHub Profile: https://github.com/${usernameGH}

If you have any questions about this application, please send an email to: [${emailAddress}](mailto:${emailAddress})`;
}

module.exports = generateMarkdown;
