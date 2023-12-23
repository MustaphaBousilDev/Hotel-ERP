import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { TasksModule } from './app/tasks/tasks.module'

const mount = ()=>{
  platformBrowserDynamic().bootstrapModule(TasksModule).catch(err => console.log(err))
}

export { mount }