![Plant Parenthood](https://github.com/JahdaiK/plant-parenthood-mern/blob/main/frontend/src/assets/deeper_green_banner.png)

## [Check it out](https://plantparenthood-app-03551ce48395.herokuapp.com/)

### :memo:Description:memo:

---

Plant Parenthood is a house plant help guide for new and old plant parents

---

### 🖼️ Website Images 🖼️ 
<img width="697" alt="Screenshot 2024-03-06 at 7 10 21 AM" src="https://github.com/JahdaiK/plant-parenthood-mern/assets/148377994/37bcc7dd-a5dc-4947-8862-151b12719b87">
<img width="694" alt="Screenshot 2024-03-06 at 7 10 40 AM" src="https://github.com/JahdaiK/plant-parenthood-mern/assets/148377994/322b916f-e946-44c9-9748-32606e6409bf">
</details>

---

### 🛠️ Built With 🛠️ 
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">

---

### 👩🏾‍💻 User Stories 👩🏾‍💻
As a terrible plant owner, I want to learn how to care plants and join a community of other struggling plant owners so that my plants stay alive

As a plant expert, I want to share my knowledge and give advice to new plant owners. 

As Jahdai’s Software Engineering Instructor, I want to if Jahdai understands building a MERN application to see if she grasped the concepts taught in class


---

### 〄 WireFrames 〄 
<img width="777" alt="Home Page" src="https://github.com/JahdaiK/plant-parenthood-mern/assets/148377994/342e7288-7a5e-435f-bac2-349951e56efc">
<img width="816" alt="Details" src="https://github.com/JahdaiK/plant-parenthood-mern/assets/148377994/2b833693-238a-45f7-b181-4407befdc6d0">


---

### 🛣️ Routes 🛣️ 
  
| URI                    |HTTP Verb| CRUD   |   React Compoents          | 
|------------------------|---------|--------|----------------------------|
| /                      | GET     | Read   | HomePage                   |
| /api/comments/${plantId}| GET    | Read   | DetailsPage/CommentSection |
| /api/comments/         | CREATE  | Create | DetailsPage/CommentSection |
| /api/comments/{id}     | PUT     | Update | Comments                   |
| /api/comments/{id}     | DELETE  | Delete | Comments                   |
| /api/users/signup      | Create  | Create | AuthFormPage               |
| /api/users/login       | Post    | Update | AuthFormPage               |


|HTTP Verb| Route                               | Description                | 
|---------|-------------------------------------|----------------------------|
| GET     |api/all                              | Retrieve All Plants        |
| GET     |api/id/{id}                          | Retrieve Plant By Id       |
| GET     |apisearch                            | Search Plant By Name       |

---

### 🗄️ ERD 🗄️ 
<img width="531" alt="Screenshot 2024-02-23 at 3 19 16 PM" src="https://github.com/JahdaiK/plant-parenthood-mern/assets/148377994/4d5e19c6-271d-44ac-9662-b5568eec4751">

---

### 💿 Install Instructions 💿
  
1. Fork the repository:
```
cd <repository folder>
```
2. Launch server 
```
npm run dev
```
3. Create an .env file
```
touch .env
```
4. Add the following to your ENV
```
PORT=3000
MONGODBURI='Connection string'
VITE_PERENUAL_APIKEY='api key from perenual'
JWT_SECRET_KEY='Secret key'
```
5. Visit:
```
http://localhost:3000
```

---

### 🧱 Hurdles 🧱 
My major hurdles came from my api. Initially it was difficult finding an Api specifically for house plants. Once I settled on one, I quickly realized the limitations of the free tier. I needed to find a way to conserve my Api calls so I created a plant model to save a plants details once it was accessed. By creating this model, when a plant is clicked on it will look at the plant database first before calling the Api.

---

### 🔮 Future Goals 🔮
  I want to improve the user experience by adding a user profile page where a user can add the plants they own and have a written log of caring for their plants

---

### 📍 API 📍
 [Perenual](https://perenual.com/docs/api)

---

### 📧 Contact 📧
Jahdai Kilkenny - jahdai.kilkenny@gmail.com
</details>




