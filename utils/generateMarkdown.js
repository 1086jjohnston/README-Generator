
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

${data.badge}

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Start](#Start)
- [Licence](#Licence)
- [Creators](#Creators)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation

        ${data.installation}

## Start

${data.start}

## Licence

${data.licence}

## Creators

${data.creator}

## Test

${data.test}


## Repository

- [Project Repo](${data.repo})

## GitHub

![My picture](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;