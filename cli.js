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

console.log(`Ajustando configuraciones...`)
console.log('\n')

copy(templateDir, targetDir)
  .then(() => {
    console.log('🌱 Ajustando configuraciones...')
    console.log('🪴 ¡Todo listo!')
    console.log('\n')
    console.log('🍂 Ejecuta el siguiente comando y ¡happy codding!')
    console.log(`cd ${projectName} && npm install && npm run dev`)
  })
  .catch((err) => {
    console.error('❌ Error al copiar la plantilla:', err)
    process.exit(1)
  })
