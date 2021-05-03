import express from 'express'
import dotenv from "dotenv";
import morgan from 'morgan'
import colors from 'colors'
import connectDB from './backend/config/db.js'
import userRoute from './backend/routes/userRoute.js'
import companyRoute from './backend/routes/companyRoute.js'

// import userRoute from './routes/userRoute.js'
// import postRoute from './routes/postRoute.js'

dotenv.config();
connectDB() 

const app = express();

app.use(express.json());
app.use(morgan('dev'))


////////////////////////////////////
// app.use('/api/users',userRoute)
// app.use('/api/posts',postRoute)

app.use('/api/users',userRoute) 

app.use('/api/companies',companyRoute) 

const __dirname = path.resolve()


if ((process.env.NODE_ENV = 'production')) {
  app.use(express.static(path.join(__dirname, '/companies/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'companies', 'build', 'index.html'))
  )
} 
else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


  // 🔥  ✔️  🚀
 
const PORT=process.env.PORT || 5000
app.listen(5000, () => {
    console.log(`Hi Master! App listening on port ${PORT}!`.yellow.inverse);
  }); 