import s from './style/App.module.sass';
import Header from "./components/Header.js";
import { TimeProgressCards, ProgressBar} from "./components/Progress";
import { ActivityTimeline, CircleSlice, TrackingActivities, TrackingDashboard} from "./components/Tracker";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from './components/Card';
import { Clock } from './components/Clock';
import { DiaryForm, Diary } from './components/Diary';
import { ContextMenu } from './components/ContextMenu';


function App() {
  return (
    <ContextMenu>
      <Header title="TIME"></Header>
      <div className={s.container}> 
        <Switch>
          <Route path="/">
              <TimeProgressCards/>
              <Clock/>
              <DiaryForm/>
              <Diary/>
              <TrackingActivities/>
              <TrackingDashboard/>
              <ActivityTimeline/>
          </Route>
        </Switch>
      </div>
    </ContextMenu>
  );
}

export default App;
