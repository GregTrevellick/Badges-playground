## Read Me Sychchronizer

<!--BadgesSTART-->
[![Read Me Synchronizer](https://img.shields.io/badge/-powered%20by%20read%20me%20synchronizer-brightgreen.svg)](https://github.com/GregTrevellick/ReadMeSynchronizer)
<!-- Powered by https://github.com/GregTrevellick/ReadMeSynchronizer -->

[![BetterCodeHub compliance](https://bettercodehub.com/edge/badge/GregTrevellick/ReadMeSynchronizer?branch=master)](https://bettercodehub.com/results/GregTrevellick/ReadMeSynchronizer)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/47d41dfc5df74ceba32dc53ddfd00b28)](https://www.codacy.com/project/gtrevellick/ReadMeSynchronizer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GregTrevellick/ReadMeSynchronizer&amp;utm_campaign=Badge_Grade_Dashboard)
[![CodeFactor](https://www.codefactor.io/repository/github/GregTrevellick/ReadMeSynchronizer/badge)](https://www.codefactor.io/repository/github/GregTrevellick/ReadMeSynchronizer)
[![GitHub top language](https://img.shields.io/github/languages/top/GregTrevellick/ReadMeSynchronizer.svg)](https://github.com/GregTrevellick/ReadMeSynchronizer)
[![Github language count](https://img.shields.io/github/languages/count/GregTrevellick/ReadMeSynchronizer.svg)](https://github.com/GregTrevellick/ReadMeSynchronizer)
[![GitHub issues](https://img.shields.io/github/issues-raw/GregTrevellick/ReadMeSynchronizer.svg)](https://github.com/GregTrevellick/ReadMeSynchronizer/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/GregTrevellick/ReadMeSynchronizer.svg)](https://github.com/GregTrevellick/ReadMeSynchronizer/pulls)
[![Sonar&metric=alert_status](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=alert_status)](https://sonarcloud.io/dashboard?id=ReadMeSynchronizer)
[![Sonar&metric=bugs](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=bugs)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=bugs)
[![Sonar&metric=code_smells](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=code_smells)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=code_smells)
[![Sonar&metric=coverage](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=coverage)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=Coverage)
[![Sonar&metric=duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=duplicated_lines_density)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=duplicated_lines)
[![Sonar&metric=ncloc](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=ncloc)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=ncloc)
[![Sonar&metric=reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=reliability_rating)
[![Sonar&metric=security_rating](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=security_rating)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=security_rating)
[![Sonar&metric=sqale_index](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=sqale_index)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=sqale_index)
[![Sonar&metric=sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=sqale_rating)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=sqale_rating)
[![Sonar&metric=vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ReadMeSynchronizer&metric=vulnerabilities)](https://sonarcloud.io/component_measures?id=ReadMeSynchronizer&metric=vulnerabilities)
[![Appveyor Build status](https://ci.appveyor.com/api/projects/status/uy4igyamwjq51gx4?svg=true)](https://ci.appveyor.com/project/GregTrevellick/ReadMeSynchronizer)
[![Appveyor unit tests](https://img.shields.io/appveyor/tests/GregTrevellick/ReadMeSynchronizer.svg)](https://ci.appveyor.com/project/GregTrevellick/ReadMeSynchronizer/build/tests)
[![Access Lint github](https://img.shields.io/badge/a11y-checked-brightgreen.svg)](https://www.accesslint.com)
[![ImgBot](https://img.shields.io/badge/images-optimized-brightgreen.svg)](https://imgbot.net/)
[![Renovate Bot github](https://img.shields.io/badge/renovatebot-checked-brightgreen.svg)](https://renovatebot.com/)
[![Charity Ware](https://img.shields.io/badge/charity%20ware-thank%20you-brightgreen.svg)](https://github.com/GregTrevellick/MiscellaneousArtefacts/wiki/Charity-Ware)
[![License](https://img.shields.io/github/license/gittools/gitlink.svg)](/LICENSE.txt)
<!--BadgesEND-->

## Overview 

A typescript app containing gulp tasks that will update the badges in your local README.md files within your local git repositories.

This means the repo-owner can :
  - manually test all their badges, both cosmetically & functionally, quickly from one place rather than the slow process of checking each repo individually
  - ensure badge consistency across many repos
  - easily spot problems (failing builds, failing tests, long running branches, etc) with any of their repos all in one place 

#### Bonus Feature 

Given this app will cause changes to multiple repos, I added gulp tasks to do the following:

  - Undo all the README.md files at once
  - Commit all the README.md files at once
  - Pull all the repos at once
  - Push all the repos at once

#### Why ?

The act of creating this repo allowed me to create my first from-scratch typescript app, and learn more about typescript, gulp & npm along the way.

#### What Next ?

At some point I may try to make a generic scaffold app from this repo, and publish it as a template on [Visual Studio Marketplace](https://marketplace.visualstudio.com/vs) and/or [Yeoman](http://yeoman.io/).

### Credits

[Anton Tishchenko](https://sagittarius.agency/blog/cicd-for-your-sitecore-pet-project-using-appveyor)

[loune.net](https://loune.net/2011/02/match-any-character-including-new-line-in-javascript-regexp/)

[Shields.io](https://shields.io/#/)


[Stef Heyenrath](https://medium.com/@stef.heyenrath/how-to-fix-sonarcloud-issue-in-a-github-pr-when-using-appveyor-integration-8909b49406b4)
