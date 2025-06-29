#!/usr/bin/env node

import { copy } from 'fs-extra'
import { resolve } from 'path'

const [, , projectName] = process.argv
if (!projectName) {
  console.error('❌ Debes indicar un nombre de proyecto:')
  console.error('   create-vite-mi-template <nombre-proyecto>')
  process.exit(1)
}

const targetDir = resolve(process.cwd(), projectName)
const templateDir = resolve(import.meta.url.replace('file://', ''), '../template')

console.log(`🚀 Creando proyecto en ./${projectName}…`)
copy(templateDir, targetDir)
  .then(() => {
    console.log('✅ ¡Listo! Ejecuta:')
    console.log(`  cd ${projectName} && npm install && npm run dev`)
  })
  .catch((err) => {
    console.error('❌ Error al copiar la plantilla:', err)
    process.exit(1)
  })
