export default [
  {
    layout: 'colFormItem',
    tagIcon: 'input',
    label: '手机号',
    vModel: 'mobile',
    formId: 6,
    tag: 'el-input',
    placeholder: '请输入手机号',
    defaultValue: '',
    span: 24,
    style: { width: '100%' },
    clearable: true,
    prepend: '',
    append: '',
    'prefix-icon': 'el-icon-mobile',
    'suffix-icon': '',
    maxlength: 11,
    'show-word-limit': true,
    readonly: false,
    disabled: false,
    required: true,
    changeTag: true,
    regList: [
      {
        pattern: '/^1(3|4|5|7|8|9)\\d{9}$/',
        message: '手机号格式错误',
      },
    ],
    params: [
      {
        key: '',
        value: '',
      },
    ],
  },
  {
    formId: 7,
    layout: 'colFormItem',
    prop: 'HB_fisrtTouch',
    id: '1',
    tag: 'el-select',
    label: '首次接触结果',
    placeholder: '请选择首次接触结果',
    value: '',
    options: [
      {
        label: '接通',
        tag: 'el-options',
        value: '接通',
      },
      {
        label: '未接通',
        tag: 'el-options',
        value: '未接通',
      },
    ],
  },
  {
    formId: 8,
    layout: 'colFormItem',
    prop: 'HB_firstDeal',
    id: '2',
    tag: 'el-select',
    label: '首次处理结果',
    placeholder: '请选择首次处理结果',
    value: '',
    options: [
      {
        label: '满意，无问题',
        tag: 'el-options',
        value: '满意，无问题',
      },
      {
        label: '不满意，宽带网络问题',
        tag: 'el-options',
        value: '不满意，宽带网络问题',
      },
      {
        label: '不满意，手机网络问题',
        tag: 'el-options',
        value: '不满意，手机网络问题',
      },
      {
        label: '不满意，套餐资费问题',
        tag: 'el-options',
        value: '不满意，套餐资费问题',
      },
      {
        label: '不满意，其他问题',
        tag: 'el-options',
        value: '不满意，其他问题',
      },
    ],
  },
  {
    formId: 9,
    layout: 'colFormItem',
    filterable: true,
    requireVal: '1000',
    dependProp: 'resultNbr',
    label: '用户问题反馈',
    allowCreate: true,
    requireProp: 'resultNbr',
    prop: 'HB_feedback',
    defaultFirst: true,
    url: '/api/orderHandle/getDict?type=hb_feedback',
    method: 'get',
    params: [],
    optionReq: {
      method: 'get',
      params: {},
      url: '/api/orderHandle/getDict?type=hb_feedback',
    },
    dependVal: '1000',
    id: '3',
    tag: 'el-select',
    placeholder: '请选择用户问题反馈',
    value: '',
    options: [],
  },
  {
    formId: 10,
    layout: 'colFormItem',
    filterable: true,
    requireVal: '1000',
    dependProp: 'resultNbr',
    label: '修复方式',
    allowCreate: true,
    requireProp: 'resultNbr',
    prop: 'HB_repairedWay',
    defaultFirst: true,
    dependVal: '1000',
    id: '4',
    tag: 'el-select',
    placeholder: '请选择修复方式',
    value: '',
    options: [
      {
        label: '上门',
        tag: 'el-options',
        value: '上门',
      },
      {
        label: '电话',
        tag: 'el-options',
        value: '电话',
      },
    ],
  },
  {
    formId: 11,
    layout: 'colFormItem',
    prop: 'HB_visitTime',
    dependVal: '上门',
    valueFormat: 'yyyy-MM-dd HH:mm:ss',
    type: 'datetime',
    id: '5',
    tag: 'el-date-picker',
    label: '预约上门时间',
    placeholder: '选择日期',
    dependProp: 'HB_repairedWay',
    value: '',
    options: [],
  },
  {
    formId: 12,
    layout: 'colFormItem',
    requireProp: 'HB_visitTime',
    prop: 'HB_bizPhone',
    dependVal: 'notNull',
    requireVal: 'notNull',
    id: '6',
    tag: 'el-input',
    label: '业务号码',
    placeholder: '请输入业务号码',
    dependProp: 'HB_visitTime',
    value: '',
    options: [],
  },
  {
    formId: 13,
    layout: 'colFormItem',
    requireProp: 'HB_visitTime',
    prop: 'HB_addr',
    dependVal: 'notNull',
    requireVal: 'notNull',
    id: '7',
    tag: 'el-input',
    label: '地址',
    placeholder: '请输入地址',
    dependProp: 'HB_visitTime',
    value: '',
    options: [],
  },
  {
    formId: 14,
    layout: 'colFormItem',
    requireProp: 'HB_visitTime',
    prop: 'HB_userPhone',
    dependVal: 'notNull',
    requireVal: 'notNull',
    id: '8',
    tag: 'el-input',
    label: '用户电话',
    placeholder: '请输入用户电话',
    dependProp: 'HB_visitTime',
    value: '',
    options: [],
  },
  {
    formId: 15,
    layout: 'colFormItem',
    filterable: true,
    requireVal: '1000',
    dependProp: 'resultNbr',
    label: '修复策略',
    defaultFirstoption: true,
    allowCreate: true,
    requireProp: 'resultNbr',
    prop: 'HB_repairedRule',
    method: 'get',
    url: '/api/orderHandle/getDict?type=hb_repaire',
    params: [],
    optionReq: {
      method: 'get',
      params: {},
      url: '/api/orderHandle/getDict?type=hb_repaire',
    },
    dependVal: '1000',
    id: '9',
    tag: 'el-select',
    placeholder: '请选择修复策略',
    value: '',
    options: [],
  },
  {
    formId: 16,
    layout: 'colFormItem',
    requireProp: 'resultNbr',
    prop: 'HB_repairedRes',
    dependVal: '1000',
    requireVal: '1000',
    dependProp: 'resultNbr',
    id: '10',
    tag: 'el-select',
    label: '修复结果',
    placeholder: '请选择修复结果',
    value: '',
    options: [
      {
        label: '满意',
        tag: 'el-options',
        value: '满意',
      },
      {
        label: '不满意',
        tag: 'el-options',
        value: '不满意',
      },
    ],
  },
  {
    formId: 17,
    layout: 'colFormItem',
    prop: 'HB_reason',
    dependVal: '不满意',
    id: '12',
    tag: 'el-select',
    label: '不满意原因',
    placeholder: '请选择不满意原因',
    dependProp: 'HB_repairedRes',
    value: '',
    options: [
      {
        label: '宽带网速不稳定或网速慢',
        tag: 'el-options',
        value: '宽带网速不稳定或网速慢',
      },
      {
        label: '手机网速不稳定或网络慢',
        tag: 'el-options',
        value: '手机网速不稳定或网络慢',
      },
      {
        label: '客户自购终端设备及材料问题',
        tag: 'el-options',
        value: '客户自购终端设备及材料问题',
      },
      {
        label: '障碍频发，修障时间长',
        tag: 'el-options',
        value: '障碍频发，修障时间长',
      },
      {
        label: '拖着不办、退订业务难',
        tag: 'el-options',
        value: '拖着不办、退订业务难',
      },
      {
        label: '业务推广说不清',
        tag: 'el-options',
        value: '业务推广说不清',
      },
      {
        label: '欺骗用户、过度营销',
        tag: 'el-options',
        value: '欺骗用户、过度营销',
      },
      {
        label: '私开业务',
        tag: 'el-options',
        value: '私开业务',
      },
      {
        label: '营业受理差错',
        tag: 'el-options',
        value: '营业受理差错',
      },
      {
        label: '等待时间长',
        tag: 'el-options',
        value: '等待时间长',
      },
      {
        label: '服务态度差',
        tag: 'el-options',
        value: '服务态度差',
      },
      {
        label: '业务受理规则不合理',
        tag: 'el-options',
        value: '业务受理规则不合理',
      },
    ],
  },
  {
    formId: 18,
    layout: 'colFormItem',
    prop: 'HB_ten',
    id: '12',
    tag: 'el-select',
    label: '是否10分邀评',
    placeholder: '请选择',
    value: '',
    options: [
      {
        label: '是',
        tag: 'el-options',
        value: '是',
      },
      {
        label: '否',
        tag: 'el-options',
        value: '否',
      },
    ],
  },
];
