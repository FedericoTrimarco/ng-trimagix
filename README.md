
# NG-TRIMAGIX

A powerful, flexible, and intuitive Angular library for building modern web applications lo.
![Logo](https://ng-trimagix.vercel.app/images/logos/ng-trimagix-logo-blank.png)


## Installation

#### 1) NPM Installation

The recommended way to install ng-trimagix is through npm:

```bash
   npm i ng-trimagix
```

#### 2) Yarn Installation

If you prefer using Yarn:

```bash
  yarn add ng-trimagix
```

#### 3) Setting Up

After installation, you simply need to import one of the ng-trimagix utilities into your component by calling it in the constructor and in the providers:

```typescript
    import { CommonModule } from '@angular/common';
    import { Component } from '@angular/core';
    import { HookFunctions } from 'ng-trimagix';

    @Component({
        selector: 'app-installation-page',
        imports: [CommonModule],
        templateUrl: './installation-page.component.html',
        styleUrl: './installation-page.component.scss',
        providers: [HookFunctions]
    })
    export class InstallationPageComponent {

        constructor(
        private hf: HookFunctions
        ){}
        
    }
```
## Documentation

[https://ng-trimagix.vercel.app](https://ng-trimagix.vercel.app)


## Authors

- [@Federico Trimarco](https://federico-trimarco.com/)

