# AG Grid CellRenderer Bug
This repository demonstrates this bug using a redux-connected component in a CellRenderer in AG Grid.

It works with older versions of react-redux <= 5.1.1 but breaks with versions >= 6.x.x

Installation:

1. npm install
2. npm run build
3. run dist/index.html in your browser

Expected behaviour: Rendering AG Grid displaying the string "TestComponent" in its cell.

Seen behaviour:
Console error:
Uncaught Invariant Violation: Could not find "store" in the context of "Connect(TestComponent)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(TestComponent) in connect options.