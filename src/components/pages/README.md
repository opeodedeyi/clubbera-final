# Pages Folder

## Overview
This folder is named `pages` but it is not used in the typical fashion expected in Next.js applications, where pages correspond directly to routes. Instead, this directory is used to store complex page components that are managed by a custom app router.

## Purpose
The main purpose of this folder is to organize and maintain complex components that represent whole pages but are not directly linked to routes via the filesystem.

## Structure
Here is a brief overview of the folder structure and what each sub-folder or notable file is intended for:

- **editGroup/**: Contains all related components for the edit group page.
- **groupDetails/**: Contains all related components for the group details page.

## Contribution Guidelines
When adding new content to this folder, please ensure that:
- You understand the custom routing mechanism and how your changes might affect application flow.
- New page components are adequately documeted (named and tested).
- Any shared logic or components that might be useful across other parts of the application are discussed with the team leader for potential relocation to more appropriate directories.

## More Information
For more details about the architecture or specific scripts, refer to the main readme.