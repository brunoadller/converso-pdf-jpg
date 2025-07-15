import { Router } from "express";
import multer from "multer";
import path from "path";

interface MulterRequest extends Request{
    file: Express.Multer.File
}

export const mainRouter = Router()

const storage = multer.diskStorage({
    destination: 'src/uploads',
    filename:(_, file, cb) => {
        const novoNome = `${Date.now()}-${file.originalname}`
        cb(null, novoNome)
    }
})
const upload = multer({storage})
mainRouter.post('/upload', upload.single('arquivo'), (req, res) => {
    const file = req.file as Express.Multer.File
    if(!file){
        res.status(400).json({erro: 'Nehum arquivo enviado'})
        return
    }
    const pdfPath = path.resolve(file.path)

    const options = {
        density: 100,
        savePath: './images',
        format: 'jpg',
        width: 800,
        height: 1000
    }

   
})




mainRouter.get("/health", (req, res) => {
    res.json({helth: 'OK'})
})