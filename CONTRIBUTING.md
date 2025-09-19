# Contributing to Meteocat Card

Thanks for your interest in contributing! 🚀

We welcome contributions in any form: bug reports, new features, or improvements to documentation.

## How to Contribute

1. **Check existing issues and discussions**  

   See if your idea or bug has already been reported:
   - [Issues](https://github.com/figorr/meteocat-card/issues)
   - [Discussions](https://github.com/figorr/meteocat-card/discussions)

2. **Fork the repository**  

   Click the "Fork" button at the top-right of this repository.

3. **Set up your development environment**

   ```bash
   git clone https://github.com/YOUR_USERNAME/meteocat-card.git
   cd meteocat-card
   npm install
   ```

4. **Start developing**

- The main code is in src/meteocat-card.js.
- You can use a local dev server (e.g., with rollup -c -w) to test changes in Home Assistant.

5. **Lint and test your code**

     ```bash
     npm run lint
     npm run test
     ```

     Make sure your code passes linting and tests before committing.

6. **Commit your changes**

     ```bash
     git add .
     git commit -m "feat: describe your change"
     git push origin your-branch
     ```

7. **Submit a Pull Request**

- Open a PR from your branch to the master branch of this repository.
- Describe your changes clearly and link any relevant issues.

## Code Style

- Use ES6+ syntax.
- Prefer const/let over var.
- Keep code modular and readable.
- Follow Prettier formatting (if configured).