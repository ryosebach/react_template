import { NotFound } from 'Components/pages/NotFound';

const routes = [
    // {
    //     path: '/hoge',
    //     component: HogePage,
    //     routes: [
    //         {
    //           path: '/fuga',
    //           exact: true,
    //           component: FugaTemplate
    //         }
    //     ]
    // },
    {
        path: '*',
        component: NotFound
    }
];
  
export default routes;
