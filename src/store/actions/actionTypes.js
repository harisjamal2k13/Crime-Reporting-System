const actionTypes = {
  LoadInitialState: 'LoadInitialState',

  LoginRequest: 'LoginRequest',
  LoginRequestFailed: 'LoginRequestFailed',
  LoginRequestSuccess: 'LoginRequestSuccess',

  loadUserRequest: 'loadUserRequest',
  loadUserRequestFailed: 'loadUserRequestFailed',
  loadUserRequestSuccess: 'loadUserRequestSuccess',

  SignUpRequest: 'SignUpRequest',
  SignUpRequestFailed: 'SignUpRequestFailed',
  SignUpRequestSuccess: 'SignUpRequestSuccess',

  logOutRequest: 'logOutRequest',
  logOutRequestFailed: 'logOutRequestFailed',
  logOutRequestSuccess: 'logOutRequestSuccess',

  addedReportRequestSuccess: 'addedReportRequestSuccess',

  addReportRequest: 'addReportRequest',
  addReportRequestFailed: 'addReportRequestFailed',
  addReportRequestSuccess: 'addReportRequestSuccess',

  updateReportRequest: 'updateReportRequest',
  updateReportRequestFailed: 'updateReportRequestFailed',
  updateReportRequestSuccess: 'updateReportRequestSuccess',

  loadCrimesRequest: 'loadCrimesRequest',
  loadCrimesRequestFailed: 'loadCrimesRequestFailed',
  loadCrimesRequestSuccess: 'loadCrimesRequestSuccess',

  loadMyIncidentsRequest: 'loadMyIncidentsRequest',
  loadMyIncidentsRequestFailed: 'loadMyIncidentsRequestFailed',
  loadMyIncidentsRequestSuccess: 'loadMyIncidentsRequestSuccess',


  viewAllCrimesRequest: 'viewAllCrimesRequest',
  viewAllCrimesRequestFailed: 'viewAllCrimesRequestFailed',
  viewAllCrimesRequestSuccess: 'viewAllCrimesRequestSuccess',



  donateBloodRequest: 'donateBloodRequest',
  donateBloodRequestFailed: 'donateBloodRequestFailed',
  donateBloodRequestSuccess: 'donateBloodRequestSuccess',

  requiredBloodRequest: 'requiredBloodRequest',
  requiredBloodRequestFailed: 'requiredBloodRequestFailed',
  requiredBloodRequestSuccess: 'requiredBloodRequestSuccess',

  updateBloodRequest: 'updateBloodRequest',
  updateBloodRequestFailed: 'updateBloodRequestFailed',
  updateBloodRequestSuccess: 'updateBloodRequestSuccess'

};

export default actionTypes;