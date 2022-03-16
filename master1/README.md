Install yalc

```
npm i yalc -g
```

Clone and build dependency repos

```
git clone git@github.com:WarrickFitz/tree_shaker_dependency_1.git
cd tree_shaker_dependency_1
npm install 
yalc publish 

cd ..

git clone git@github.com:WarrickFitz/tree_shaker_dependency_2.git
cd tree_shaker_dependency_2
npm install 
yalc publish 

cd ..
```

Clone and build the main main repo + use yalc to link the dependency repos

```
git clone git@github.com:WarrickFitz/tree_shaker_app.git
cd tree_shaker_app
yalc add tree_shaker_dependency_1
yalc add tree_shaker_dependency_2
```

Now run 
```
npm run build

or to see more debug on the webpack build

npm run build:dev
```

