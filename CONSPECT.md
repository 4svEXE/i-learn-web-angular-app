ng build --configuration production --localize --base-href "https://4svEXE.github.io/i-learn-web-angular-app/"

angular-cli-ghpages --dir=dist

## ======



## Add Angular
    yarn add @angular/cli
## Create Angular app 
    ng new app-name --skip-install
    cd ./app-name
    npm i  //loooong
## Runn server
    ng serve
## To open
    http://localhost:4200
## Add tailwind
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

    == OR ==

    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init
   ## tw.config
	content: ["./src/**/*.{html,ts}"],
   ## in style.scss
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

## Create component
    ng g component views/pages/compName
    ng g component views/shared/header
	
	ng g service services/servName
    
## TO START APP
    cd ./ang-start
    ng serve

## Router
<router-outlet></router-outlet>
routerLink="/register"
[routerLinkActive]="['active']"

// Deploy
ng build --configuration production --base-href "https://4svEXE.github.io/okeyPostAngular/"

angular-cli-ghpages --dir=dist/okey-post


## Темна тема в тайлвінд

##  tw.config
    darkMode: 'class'

##  index.html
    <html lang="en" class="dark">
    <body class="bg-white dark:bg-black">


    ng generate directive 

    ng generate service shared/services/theme-toggle

    ng generate directive shared/directives/theme-toggle
    ng generate component shared/providers/with-theme


    ng generate component layout/ui-kit


    ng generate component pages/preparation-for-the-test

## localize
https://www.youtube.com/watch?v=HUxcqus6krw

ng add @angular/localize 
ng extract-i18n --output-path src/i18n
ng serve --configuration=ua

## Upload
ng build --configuration production --localize --base-href "https://4svEXE.github.io/i-learn-web-angular-app/"

angular-cli-ghpages --dir=dist/
