import "reflect-metadata"
import app from "./app";
import { AppDataSource } from "./db";

 async function main() {
  try {
    await AppDataSource.initialize()
    const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
   console.log(`Server workin on port ${PORT}`);
});
  } catch (error) {
    console.log(error);
    
  }
 }
 main();