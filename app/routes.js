// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

//  return [
//    {
//      path: '/',
//      name: 'home',
//      getComponent(nextState, cb) {
//        const importModules = Promise.all([
//          System.import('containers/HomePage/reducer'),
//          System.import('containers/HomePage/sagas'),
//          System.import('containers/HomePage'),
//        ]);
//
//        const renderRoute = loadModule(cb);
//
//        importModules.then(([reducer, sagas, component]) => {
//          injectReducer('home', reducer.default);
//          injectSagas(sagas.default);
//
//          renderRoute(component);
//        });
//
//        importModules.catch(errorLoading);
//      },
//    }, {
//      path: '/features',
//      name: 'features',
//      getComponent(nextState, cb) {
//        System.import('containers/FeaturePage')
//          .then(loadModule(cb))
//          .catch(errorLoading);
//      },
//    }, {
//      path: '*',
//      name: 'notfound',
//      getComponent(nextState, cb) {
//        System.import('containers/NotFoundPage')
//          .then(loadModule(cb))
//          .catch(errorLoading);
//      },
//    },
//  ];

  return [
    /**
     * Dashboard: INDEX
     */
    {
      path: '/',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Dashboard/state/reducer'),
          System.import('containers/Dashboard/state/sagas'),
          System.import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    /**
     * Patient: INDEX
     */
    {
      path: '/patient',
      name: 'patientIndex',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Patient/Index/state/reducer'),
          System.import('containers/Patient/Index/state/sagas'),
          System.import('containers/Patient/Index'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('patientIndex', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    /**
     * Patient: VIEW
     */
    {
      path: '/patient/:id',
      name: 'patientView',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Patient/View/state/reducer'),
          System.import('containers/Patient/View/state/sagas'),
          System.import('containers/Patient/View'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('patientView', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    /**
     * Patient: EDIT
     */
    {
      path: '/patient/manipulation/:id',
      name: 'patientEdit',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Patient/Manipulation/state/reducer'),
          System.import('containers/Patient/Manipulation/state/sagas'),
          System.import('containers/Patient/Manipulation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('patientEdit', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    /**
     * Patient: EDIT
     */
    {
      path: '/patient/create',
      name: 'patientCreate',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Patient/Manipulation/state/reducer'),
          System.import('containers/Patient/Manipulation/state/sagas'),
          System.import('containers/Patient/Manipulation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('patientCreate', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },

    /**
     * Not Found
     */
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ]
}
