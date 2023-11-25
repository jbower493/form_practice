import "./App.css";
import ReactHookForm from "./containers/reactHookForm";
import NoForm from "./containers/noForm";

function App() {
    return (
        <div className="app">
            <ReactHookForm />
            <NoForm />
        </div>
    );
}

export default App;
