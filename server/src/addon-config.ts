import { exists, readFile } from 'fs/promises'

const OPTIONS_PATH = '/data/options.json'

export const injectHassOptions = async () => {
  const isHass = await exists(OPTIONS_PATH)
  if (!isHass) {
    return
  }

  const raw = await readFile(OPTIONS_PATH, 'utf8')
  const options = JSON.parse(raw)

  console.log('injecting hass options', options)

  if (options.llm) {
    process.env.LLM = JSON.stringify(options.llm)
  }

  if (options.embeddings) {
    process.env.EMBEDDINGS = JSON.stringify(options.embeddings)
  }

  if (options.skills) {
    process.env.SKILLS = JSON.stringify(options.skills)
  }

  if (process.env.SUPERVISOR_TOKEN) {
    process.env.HOMEASSISTANT = JSON.stringify({
      "token": process.env.SUPERVISOR_TOKEN,
      "url": "ws://supervisor:80/core/websocket",
      "supervisor": true
    })
  }
}

await injectHassOptions()
