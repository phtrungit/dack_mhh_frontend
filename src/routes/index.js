import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../component/HomePage'
import PopularComponent from "../component/PopularComponent";
import Singin from '../component/SignInComponent'
import Singup from '../component/SignUpComponent'
import ListExam from '../component/studentComponent/ListExam'
import MyTest from '../component/studentComponent/MyTest'
import TestComponent from '../component/studentComponent/TakeATest'
import CreateTestComponent from '../component/teacherComponent/CreateTest'
import CreateQuestionTest from '../component/teacherComponent/CreateQuestionTest'
import StudentCharts from '../component/StudentCharts'
import TeacherCharts from '../component/TeacherCharts'
import TeacherTestList from '../component/teacherComponent/TeacherTestList'
import StudentHistoryExam from '../component/studentComponent/StudentHistoryExam'
import DetailExam from '../component/studentComponent/DetailedTestAndResult'
import TestStatistics from '../component/teacherComponent/TestStatistics'
const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/popular" component={PopularComponent} />
            <Route path="/login" component={Singin} />
            <Route path="/signup" component={Singup} />
            <Route path="/list-exam" component={ListExam} />
            <Route path="/myex" component={MyTest} />
            <Route path="/test/:idExam" component={TestComponent} />
            <Route path="/createTest" component={CreateTestComponent} />
            <Route path="/createQuestionTest/:id" component={CreateQuestionTest} />
            <Route path="/studentscharts" component={StudentCharts} />
            <Route path="/teacherscharts" component={TeacherCharts} />
            <Route path="/teachertestlist" component={TeacherTestList} />
            <Route path="/studenthistoryexam" component={StudentHistoryExam} />
            <Route path="/detail-ex/:id" component={DetailExam} />
            <Route path="/testStatistics/:id" component={TestStatistics} />
        </Switch>
    </div>
)

export default routes