# yalc-recursive

# build package-b and publish it ... it's needed by package-a
cd package-b
npm install
npm run build
zalc publish
cd ..

# add package-b which is now available and build package-a ... it's needed by master. 
cd package-a
npm install
zalc add package-b
npm run build
zalc publish
cd ..

# add package-a to master and then build 
cd master1
zalc add package-a
npm install
npm run build:prod
node dist/main.js
