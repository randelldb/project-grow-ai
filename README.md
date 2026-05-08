# Phase 1 Product Rules

## Chat as workspace

The chat is treated as the active workspace for the user. Users can ask questions, upload images, and interact with the AI without automatically storing all conversation data.

## Timeline as saved plant record

The timeline is the long-term saved record for a plant. Timeline items represent information the user intentionally wants to keep.

## Manual timeline saving

AI responses are not automatically added to the timeline. Users must explicitly choose the "Save to timeline" action before an item becomes part of the plant history.

## AI context rules in Phase 1

In Phase 1, the AI context is intentionally limited.

The AI context includes:

* Plant name
* Plant species
* Timeline items
* Current chat message
* Current uploaded image (when available)

The AI context does not include:

* Full chat history

This keeps the timeline as the primary source of saved plant context.

## Phase 1 scope

This repository currently focuses on the Phase 1 product scope.

Phase 1 focuses on:

* Plant overview
* Timeline system
* Chat workspace
* Manual timeline saving
* AI context preparation
