# @fcarrascosa elements

```js script
export default {
    title: 'Info/@fcarrascosa elements'
}
```

## DISCLAIMER
This is an experimental project in which I'm exploring the **monorepo**, **CI/CD** via __[Github Actions][2]__ and other cool stuff, such as __[GitHub Pages][3]__.

The intention for this project is just for personal amusement, and it is not intended to be actively maintained (for now).

Said that, any contribution is welcome and appreciated.

## Demo
There's this nice [storybook demo][8] you can check.

## Installing

### Prerequisites
This project relies on the the `npm` registry, so you might want to install either [`npm`][4] or [`yarn`][5]

### Installation process
First thing you want to do to install this is cloning it into your local machine:

```bash
git clone https://github.com/fcarrascosa/fcarrascosa-elements.git
```

This repo uses [`lerna`][1] as __monorepo__ manager, so after doing that, to install the dependencies you should run:

```bash
npx lerna bootstrap
```

or, as it is included in the `package.json` as a `devDependency`, I created a `postinstall` script that should do that for you. You can simply run:

```bash
npm install
```

## How to contribute
**INFO:** This section is to be moved to a `CONTRIBUTING.md` file.

I love feedback. I think it's crucial to become better at what you do.

### For questions or feedback
You can open a `GitHub issue` addressing your question or feedback. Issues templates are to be added, but will be there. In the meantime, you can ask your question and detail it as much as possible and I will try to give you the best answer I can find.

### For improvements
You can open a `Pull Request` to this repo addressing what you are to improve.
After you installed the project and you have set it up, as stated on the [Installing](#Installing) section you should create a `fix` branch.

```bash
git checkout -b fix/myAwesomeFix
```

When you finished your improvement, and you checked everything work as expected (via tests and storybook), then you can **fork** this project under your namespace and add that fork to your local repo.

```bash
# add fork to your remotes
git remote add fork git@github.com:<your-user>/fcarrascosa-elements.git

# push new branch to your fork
git push -u fork fix/myAwesomeFix
```

**NOTE**: Do have in mind that this repo uses [conventional-commits][6] convention, so please, follow it.

After doing so, you can create a **pull request**.

## Contact
Feel free to open a github issue for feedback or questions about this project.

You can also contact me via **[Twitter][7]**.

[1]: https://lerna.js.org/
[2]: https://github.com/features/actions
[3]: https://pages.github.com/
[4]: https://www.npmjs.com/get-npm
[5]: https://yarnpkg.com/
[6]: https://www.conventionalcommits.org/
[7]: https://twitter.com/jarredethe
[8]: https://fcarrascosa.github.io/fcarrascosa-elements/
