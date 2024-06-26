---
description: Home Assistant add-on for hosting your instance of Ava
---

[![Open Home Assistant instance and add repository](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https://github.com/0x77dev/ava)

By default configuration uses Anthropic Opus 3 for language model, snowflake-arctic-embed using [Ollama](/addons/ollama) for text embedding model, and empty HTTP skills list.

In default configuration Ollama's `baseURL` is set to `http://04c4e5a1-ollama:11434` which is the default address for Ollama add-on in Ava's repository.

For more information on how to configure Ava, refer to the [Configuration section](https://ava.0x77.dev/configuration).

Server by default will pull Ollama models on start when they are requested from Ollama.
