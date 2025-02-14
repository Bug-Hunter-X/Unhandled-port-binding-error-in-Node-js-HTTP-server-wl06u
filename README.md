# Unhandled Port Binding Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an HTTP server fails to start because the specified port is already in use.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a robust solution.

## Problem

The `bug.js` file attempts to start an HTTP server on port 8080. If this port is already occupied by another process, the server will crash without providing informative error handling.

## Solution

The `bugSolution.js` file addresses this by incorporating error handling. It uses the `'error'` event listener on the HTTP server to gracefully handle port binding errors, logging an informative message and potentially attempting to find an alternative port.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` (observe the crash if port 8080 is in use).
4. Run `node bugSolution.js` (observe the improved error handling).