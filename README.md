# Deploy MERN Application with Docker Compose

This application is designed to showcase the CRUD operations implemented from both the back and front-end using the MERN Stack. As well as containerization with Docker and user authentication.

## What the app does?
This web app allows you to add animals to an Animal Shelter site. So as an admin you can add an animal, edit it, and delete it. Also, as a visitor and admin, you can see the list of animals ready for adoption. Although the admin or user authentication was not completed on the front-end, just on the backend due to constraints of time. But you can recreate this behavior, see the authentication section. And also you can take a look at the sign-up and sig-in API on the backend.  

## Autehntication
In case that you want to recreate the admin or user authentication of the API, you can copy and paste the code below at the "item-router.js" file. This is just for recreation purposes which demonstrates how to authenticate a user on the API and how to limit the API to certain users. Although, in this project, the authentication on the front-end was not completed.

>`router.post('/item', auth, ItemCtrl.createItem)
router.put('/item/:id', auth, ItemCtrl.updateItem)
router.delete('/item/:id', auth,  ItemCtrl.deleteAnimal)
router.get('/item/:id', auth,  ItemCtrl.getItemById)
router.get('/items',ItemCtrl.getItems)`

## Demo video of the app
<https://recordit.co/K2x1vq8pDl>

What was accomplished?
- ✅ Node JS 
- ✅ RBAC (Just on the backend)
- ✅ Basic Security
- ✅ React / Redux
- ✅ HTML / CSS
- ✅ Code Organization
- ✅ Git
- ✅ containerize.

What can be improved? "TODO LIST":

- ✅ Relational database
- ✅ RBAC. Implementing the authentication in the front-end. Also, setting up specific permissions for each kind of user. 
- ✅ Integration testing.
- ✅ Websockets.

## How to run the project as Dev

**1. Build the container**

```bash
make build-dev
```

**2. Run**

```bash
make run-dev
```

After this, App will be exposed by default  at `http://localhost:3000`.

**3. Stop**

```bash
make down-dev
```