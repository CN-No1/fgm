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
    prop: 'HB_fisrtTouch',
    vModel: 'HB_fisrtTouch',
    layout: 'colFormItem',
    id: '1',
    tag: 'el-select',
    label: '首次接触结果',
    placeholder: '请选择首次接触结果',
    value: '',
    span: 24,
    style: {
      width: '100%',
    },
    options: [
      {
        label: '接通',
        tag: 'el-option',
        value: '接通',
      },
      {
        label: '未接通',
        tag: 'el-option',
        value: '未接通',
      },
    ],
  },
];
