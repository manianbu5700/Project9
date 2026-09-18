# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> has title
- Location: tests\example.spec.js:4:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
<launched> pid=11468
Call log:
  - <launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
  - <launched> pid=11468
  - [pid=11468] <gracefully close start>
  - [pid=11468] <kill>
  - [pid=11468] <will force kill>
  - [pid=11468] taskkill stderr: ERROR: The process "11468" not found.
  - [pid=11468] <process did exit: exitCode=3236495362, signal=null>
  - [pid=11468] starting temporary directories cleanup
  - [pid=11468] finished temporary directories cleanup
  - [pid=11468] <gracefully close end>

```