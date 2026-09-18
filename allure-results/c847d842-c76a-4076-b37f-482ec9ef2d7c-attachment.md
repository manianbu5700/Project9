# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> validate amazon application
- Location: tests\example.spec.js:8:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
<launched> pid=22284
Call log:
  - <launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
  - <launched> pid=22284
  - [pid=22284] <gracefully close start>
  - [pid=22284] <kill>
  - [pid=22284] <will force kill>
  - [pid=22284] taskkill stderr: ERROR: The process "22284" not found.
  - [pid=22284] <process did exit: exitCode=3236495362, signal=null>
  - [pid=22284] starting temporary directories cleanup
  - [pid=22284] finished temporary directories cleanup
  - [pid=22284] <gracefully close end>

```