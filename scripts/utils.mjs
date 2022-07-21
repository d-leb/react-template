import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

export const paths = {
  build: path.join(__dirname, '../build/'),
  config: path.join(__dirname, '../config/'),
  files: path.join(__dirname, '../public/'),
  scripts: path.join(__dirname, '../scripts/'),
  src: path.join(__dirname, '../src/')
}
