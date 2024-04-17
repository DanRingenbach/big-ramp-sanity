import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Big Ramp',

  projectId: 'p2ep0njv',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  basePath: '/studio',
  schema: {
    types: schemaTypes,
  },
})
