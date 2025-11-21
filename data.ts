import { Level, BlockCategory } from './types';

export const LEVELS: Level[] = [
  // LEVEL 1: MOTION
  {
    id: 1,
    title: "Level 1：动作积木大挑战",
    category: BlockCategory.Motion,
    learn: {
      title: "认识蓝色「动作」积木",
      description: "欢迎来到 Scratch 积木大冒险！首先学习控制角色移动。",
      exampleBlock: { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' },
      explanation: "动作积木控制角色的位置和方向。记得：Scratch 舞台宽 480 (x: -240 到 240)，高 360 (y: -180 到 180)。"
    },
    practice: [
      {
        instruction: "1. 让角色向前移动。",
        initialBlocks: [
          { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
          'GAP'
        ],
        missingBlockId: 'm1',
        options: [
          { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm2', text: '右转 15 度', category: BlockCategory.Motion, type: 'stack' },
          { id: 'l1', text: '说 你好！', category: BlockCategory.Looks, type: 'stack' }
        ]
      },
      {
        instruction: "2. 角色需要向右转弯。",
        initialBlocks: [
           { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
           { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' },
           'GAP'
        ],
        missingBlockId: 'm_turn_r',
        options: [
          { id: 'm_turn_l', text: '左转 15 度', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_turn_r', text: '右转 15 度', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_gx', text: '将 x 坐标设为 0', category: BlockCategory.Motion, type: 'stack' }
        ]
      },
      {
        instruction: "3. 先左转，再前行。",
        initialBlocks: [
          { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
          { id: 'm_turn_l', text: '左转 15 度', category: BlockCategory.Motion, type: 'stack' },
          'GAP'
        ],
        missingBlockId: 'm1',
        options: [
          { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_gl', text: '滑行到 随机位置', category: BlockCategory.Motion, type: 'stack' },
          { id: 'e2', text: '当按下 空格 键', category: BlockCategory.Events, type: 'hat' }
        ]
      },
      {
        instruction: "4. 瞬间移动到中心 (0, 0)。",
        initialBlocks: [
          { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
          'GAP'
        ],
        missingBlockId: 'm_goto_xy',
        options: [
          { id: 'm_goto_xy', text: '移到 x: 0 y: 0', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_ch_x', text: '将 x 坐标增加 10', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_point', text: '面向 90 方向', category: BlockCategory.Motion, type: 'stack' }
        ]
      },
      {
        instruction: "5. 慢慢滑行到鼠标位置。",
        initialBlocks: [
          { id: 'e2', text: '当按下 空格 键', category: BlockCategory.Events, type: 'hat' },
          'GAP'
        ],
        missingBlockId: 'm_glide_mouse',
        options: [
          { id: 'm_goto_rand', text: '移到 随机位置', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_glide_mouse', text: '在 1 秒内滑行到 鼠标指针', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_point', text: '面向 90 方向', category: BlockCategory.Motion, type: 'stack' }
        ]
      },
      {
        instruction: "6. 改变方向：面向左边 (-90)。",
        initialBlocks: [
          { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
          'GAP',
          { id: 'm1', text: '移动 50 步', category: BlockCategory.Motion, type: 'stack' }
        ],
        missingBlockId: 'm_point_neg90',
        options: [
          { id: 'm_point_90', text: '面向 90 方向', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_point_neg90', text: '面向 -90 方向', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_turn_180', text: '右转 180 度', category: BlockCategory.Motion, type: 'stack' }
        ]
      },
      {
        instruction: "7. 向右平移 (X 增加)。",
        initialBlocks: [
          { id: 'e3', text: '当按下 -> 键', category: BlockCategory.Events, type: 'hat' },
          'GAP'
        ],
        missingBlockId: 'm_change_x',
        options: [
          { id: 'm_change_y', text: '将 y 坐标增加 10', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_change_x', text: '将 x 坐标增加 10', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_set_x', text: '将 x 坐标设为 0', category: BlockCategory.Motion, type: 'stack' }
        ]
      },
      {
        instruction: "8. 向上平移 (Y 增加)。",
        initialBlocks: [
          { id: 'e4', text: '当按下 ^ 键', category: BlockCategory.Events, type: 'hat' },
          'GAP'
        ],
        missingBlockId: 'm_change_y',
        options: [
          { id: 'm_change_y', text: '将 y 坐标增加 10', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_set_y', text: '将 y 坐标设为 100', category: BlockCategory.Motion, type: 'stack' },
          { id: 'm_change_x', text: '将 x 坐标增加 10', category: BlockCategory.Motion, type: 'stack' }
        ]
      },
      {
        instruction: "9. 碰到边缘就反弹，防止跑丢。",
        initialBlocks: [
          { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
          { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' },
          { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack', indent: true },
          'GAP'
        ],
        missingBlockId: 'm_bounce',
        options: [
          { id: 'm_bounce', text: '碰到边缘就反弹', category: BlockCategory.Motion, type: 'stack', indent: true },
          { id: 'm_x_pos', text: 'x 坐标', category: BlockCategory.Motion, type: 'reporter' },
          { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }
        ]
      },
      {
        instruction: "10. 锁定目标：面向鼠标指针。",
        initialBlocks: [
          { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
          { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' },
          'GAP',
          { id: 'm1', text: '移动 5 步', category: BlockCategory.Motion, type: 'stack', indent: true }
        ],
        missingBlockId: 'm_point_towards',
        options: [
          { id: 'm_point_90', text: '面向 90 方向', category: BlockCategory.Motion, type: 'stack', indent: true },
          { id: 'm_point_towards', text: '面向 鼠标指针', category: BlockCategory.Motion, type: 'stack', indent: true },
          { id: 'm_turn_r', text: '右转 15 度', category: BlockCategory.Motion, type: 'stack', indent: true }
        ]
      }
    ],
    quiz: [
      { question: "积木「移动 10 步」是往哪个方向移动？", options: ["永远向右", "永远向上", "角色当前面向的方向", "随机方向"], correctOptionIndex: 2 },
      { question: "想要角色像镜子反射一样转回来，用哪个？", options: ["右转 180 度", "碰到边缘就反弹", "移到 随机位置", "面向 90 方向"], correctOptionIndex: 1 },
      { question: "Scratch 舞台中心的坐标是？", options: ["100, 100", "0, 0", "240, 180", "没有坐标"], correctOptionIndex: 1 },
      { question: "「将 x 坐标增加 -10」会让角色？", options: ["向右移动", "向左移动", "向上移动", "向下移动"], correctOptionIndex: 1 },
      { question: "如果角色面向 90 (右)，执行「移动 -20 步」？", options: ["向右走 20", "向左退 20", "向下走", "不动"], correctOptionIndex: 1 },
      { question: "哪个积木让角色慢慢飞到指定位置？", options: ["移到", "在 1 秒内滑行到", "移动", "将 x 设为"], correctOptionIndex: 1 },
      { question: "Y 坐标控制什么方向？", options: ["水平(左右)", "垂直(上下)", "角度", "大小"], correctOptionIndex: 1 },
      { question: "「面向 0 方向」指哪里？", options: ["上", "下", "左", "右"], correctOptionIndex: 0 },
      { question: "「旋转」改变的是？", options: ["位置", "大小", "方向", "颜色"], correctOptionIndex: 2 },
      { question: "一直「移动」不反弹会怎样？", options: ["停住", "穿过屏幕", "卡在边缘", "自动回头"], correctOptionIndex: 2 }
    ]
  },
  // LEVEL 2: LOOKS
  {
    id: 2,
    title: "Level 2：外观积木变变变",
    category: BlockCategory.Looks,
    learn: {
      title: "认识紫色「外观」积木",
      description: "让角色说话、变色、换造型。",
      exampleBlock: { id: 'l1', text: '说 你好！ 2 秒', category: BlockCategory.Looks, type: 'stack' },
      explanation: "外观积木可以改变角色的显示方式，包括说话气泡、造型切换、大小变化、颜色特效以及图层顺序。"
    },
    practice: [
      {
        instruction: "1. 让猫咪说「你好」。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'l_say',
        options: [{ id: 'l_say', text: '说 你好！ 2 秒', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_think', text: '思考 Hmm...', category: BlockCategory.Looks, type: 'stack' }, { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "2. 思考一下。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'l_say', text: '说 那个... 2 秒', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'l_think',
        options: [{ id: 'l_switch', text: '换成 造型2 造型', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_think', text: '思考 应该往哪走呢？ 2 秒', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_point', text: '面向 90 方向', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "3. 走路动画：切换造型。",
        initialBlocks: [{ id: 'e2', text: '当按下 -> 键', category: BlockCategory.Events, type: 'hat' }, { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }, 'GAP'],
        missingBlockId: 'l_next_costume',
        options: [{ id: 'l_next_costume', text: '下一个造型', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_next_backdrop', text: '下一个背景', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_turn', text: '右转 15 度', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "4. 变大魔法。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'l_change_size',
        options: [{ id: 'l_set_size', text: '将大小设为 100', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_change_size', text: '将大小增加 10', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_y', text: '将 y 增加 10', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "5. 初始化：开始时恢复大小。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP', { id: 'm_goto', text: '移到 x:0 y:0', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'l_set_size_100',
        options: [{ id: 'l_change_size', text: '将大小增加 -10', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_set_size_100', text: '将大小设为 100', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "6. 变色龙：改变颜色特效。",
        initialBlocks: [{ id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'l_change_color',
        options: [{ id: 'l_change_color', text: '将 颜色 特效增加 25', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_clear', text: '清除图形特效', category: BlockCategory.Looks, type: 'stack' }, { id: 's_touch', text: '碰到 鼠标指针？', category: BlockCategory.Sensing, type: 'boolean' }]
      },
      {
        instruction: "7. 隐身术。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'l_say', text: '我要躲起来！', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'l_hide',
        options: [{ id: 'l_show', text: '显示', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_ghost', text: '将 虚像 设为 50', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "8. 现身。",
        initialBlocks: [{ id: 'e2', text: '当按下 空格 键', category: BlockCategory.Events, type: 'hat' }, 'GAP', { id: 'l_say', text: '在这呢！', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'l_show',
        options: [{ id: 'l_show', text: '显示', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_next', text: '下一个造型', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_00', text: '移到 x:0 y:0', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "9. 换背景。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'l_say', text: '天黑了...', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'l_switch_bg',
        options: [{ id: 'l_costume', text: '换成 造型1', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_switch_bg', text: '换成 Night 背景', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_turn', text: '右转 180 度', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "10. 图层调整：移到最前面。",
        initialBlocks: [{ id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'l_front',
        options: [{ id: 'l_front', text: '移到 最前面', category: BlockCategory.Looks, type: 'stack' }, { id: 'l_back', text: '移到 最后面', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_fwd', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }]
      }
    ],
    quiz: [
      { question: "「说...」和「思考...」的区别？", options: ["颜色不同", "泡泡形状不同", "字体不同", "时间不同"], correctOptionIndex: 1 },
      { question: "指定变成特定造型用哪个？", options: ["换成...造型", "下一个造型", "显示", "移到最前面"], correctOptionIndex: 0 },
      { question: "「大小增加 -10」会？", options: ["变大", "变小", "透明", "下移"], correctOptionIndex: 1 },
      { question: "「隐藏」后角色还在吗？", options: ["不在了", "在，只是看不见", "跑了", "变背景"], correctOptionIndex: 1 },
      { question: "半透明特效是？", options: ["颜色", "鱼眼", "马赛克", "虚像"], correctOptionIndex: 3 },
      { question: "「清除图形特效」的作用？", options: ["删角色", "删背景", "重置特效", "停止"], correctOptionIndex: 2 },
      { question: "一直「下一个造型」会？", options: ["无事发生", "循环切换动画", "报错", "消失"], correctOptionIndex: 1 },
      { question: "不想被别的角色挡住？", options: ["移到 最前面", "移到 最后面", "上移 10", "显示"], correctOptionIndex: 0 },
      { question: "说话 2 秒后气泡会？", options: ["一直留着", "自动消失", "变色", "变思考"], correctOptionIndex: 1 },
      { question: "造型编号是什​​么形状？", options: ["堆栈", "帽子", "椭圆(报告)", "六边形"], correctOptionIndex: 2 }
    ]
  },
  // LEVEL 3: SOUND
  {
    id: 3,
    title: "Level 3：声音音乐会",
    category: BlockCategory.Sound,
    learn: {
      title: "认识粉色「声音」积木",
      description: "给你的项目添加音效和背景音乐。",
      exampleBlock: { id: 's_play', text: '播放声音 喵 等待播完', category: BlockCategory.Sound, type: 'stack' },
      explanation: "声音积木可以播放音效、改变音量、音调。注意「播放声音」和「播放声音等待播完」的区别。"
    },
    practice: [
      {
        instruction: "1. 播放猫叫声。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 's_start',
        options: [{ id: 's_start', text: '播放声音 喵', category: BlockCategory.Sound, type: 'stack' }, { id: 'l_say', text: '说 喵', category: BlockCategory.Looks, type: 'stack' }, { id: 'm_move', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "2. 播放背景音乐（直到播完）。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP', { id: 'l_say', text: '音乐结束！', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 's_play_until',
        options: [{ id: 's_start', text: '播放声音 BGM', category: BlockCategory.Sound, type: 'stack' }, { id: 's_play_until', text: '播放声音 BGM 等待播完', category: BlockCategory.Sound, type: 'stack' }, { id: 's_stop', text: '停止所有声音', category: BlockCategory.Sound, type: 'stack' }]
      },
      {
        instruction: "3. 停止所有吵闹的声音。",
        initialBlocks: [{ id: 'e_space', text: '当按下 空格 键', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 's_stop',
        options: [{ id: 's_vol', text: '将音量设为 0', category: BlockCategory.Sound, type: 'stack' }, { id: 's_stop', text: '停止所有声音', category: BlockCategory.Sound, type: 'stack' }, { id: 'c_stop', text: '停止 全部脚本', category: BlockCategory.Control, type: 'cap' }]
      },
      {
        instruction: "4. 调高音量。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 's_change_vol',
        options: [{ id: 's_change_vol', text: '将音量增加 10', category: BlockCategory.Sound, type: 'stack' }, { id: 's_set_vol', text: '将音量设为 100%', category: BlockCategory.Sound, type: 'stack' }, { id: 'l_size', text: '将大小增加 10', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "5. 设置为静音。",
        initialBlocks: [{ id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 's_set_vol_0',
        options: [{ id: 's_set_vol_0', text: '将音量设为 0%', category: BlockCategory.Sound, type: 'stack' }, { id: 's_stop', text: '停止所有声音', category: BlockCategory.Sound, type: 'stack' }, { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "6. 变声：改变音调。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP', { id: 's_start', text: '播放声音 喵', category: BlockCategory.Sound, type: 'stack' }],
        missingBlockId: 's_pitch',
        options: [{ id: 's_pitch', text: '将 音调 音效增加 50', category: BlockCategory.Sound, type: 'stack' }, { id: 's_pan', text: '将 左右平衡 音效增加 50', category: BlockCategory.Sound, type: 'stack' }, { id: 'l_col', text: '将 颜色 特效增加 25', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "7. 清除音效。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 's_clear',
        options: [{ id: 's_clear', text: '清除声音特效', category: BlockCategory.Sound, type: 'stack' }, { id: 'l_clear', text: '清除图形特效', category: BlockCategory.Looks, type: 'stack' }, { id: 's_stop', text: '停止所有声音', category: BlockCategory.Sound, type: 'stack' }]
      },
      {
        instruction: "8. 左右声道平衡（立体声）。",
        initialBlocks: [{ id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, { id: 's_pan', text: '将 左右平衡 设为 鼠标x', category: BlockCategory.Sound, type: 'stack', indent: true }, 'GAP'],
        missingBlockId: 's_start_loop',
        options: [{ id: 's_start_loop', text: '播放声音 Beat', category: BlockCategory.Sound, type: 'stack', indent: true }, { id: 's_stop', text: '停止', category: BlockCategory.Sound, type: 'stack' }, { id: 'm_move', text: '移动', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "9. 循环播放音乐。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 's_play_until_loop',
        options: [{ id: 's_play_until_loop', text: '播放声音 BGM 等待播完', category: BlockCategory.Sound, type: 'stack', indent: true }, { id: 's_start_loop', text: '播放声音 BGM', category: BlockCategory.Sound, type: 'stack', indent: true }, { id: 's_change_vol', text: '音量 +10', category: BlockCategory.Sound, type: 'stack' }]
      },
      {
        instruction: "10. 音量作为变量使用。",
        initialBlocks: [{ id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, { id: 'l_set_size', text: '将大小设为 音量', category: BlockCategory.Looks, type: 'stack', indent: true }, 'GAP'],
        missingBlockId: 's_vol_val',
        options: [{ id: 's_vol_val', text: '音量', category: BlockCategory.Sound, type: 'reporter' }, { id: 'm_x', text: 'x 坐标', category: BlockCategory.Motion, type: 'reporter' }, { id: 's_start', text: '播放声音', category: BlockCategory.Sound, type: 'stack' }]
      }
    ],
    quiz: [
      { question: "「播放声音」和「播放声音等待播完」的区别？", options: ["没区别", "前者立刻继续执行后续积木，后者等声音播完才继续", "后者声音更大", "前者只能播一次"], correctOptionIndex: 1 },
      { question: "想做背景音乐循环播放，应该用？", options: ["重复执行 + 播放声音", "重复执行 + 播放声音等待播完", "播放声音", "停止所有声音"], correctOptionIndex: 1 },
      { question: "「音量」的最大值通常是？", options: ["50%", "100%", "无限制", "10%"], correctOptionIndex: 1 },
      { question: "「停止所有声音」会停止其他角色的声音吗？", options: ["会", "不会", "只停止背景音乐", "只停止当前角色"], correctOptionIndex: 0 },
      { question: "提高「音调」会让声音？", options: ["变大声", "变尖细(速度变快)", "变低沉", "变慢"], correctOptionIndex: 1 },
      { question: "左右平衡(Pan) 设为 -100 是？", options: ["左声道", "右声道", "中间", "静音"], correctOptionIndex: 0 },
      { question: "在哪里录制新声音？", options: ["代码区", "造型区", "声音标签页", "舞台"], correctOptionIndex: 2 },
      { question: "可以把「音量」积木(椭圆)放入「移动」积木里吗？", options: ["可以，声音越大走越远", "不可以", "会报错", "会让猫飞起来"], correctOptionIndex: 0 },
      { question: "想要声音逐渐消失(淡出)？", options: ["重复执行：音量-1", "停止声音", "隐藏", "清除特效"], correctOptionIndex: 0 },
      { question: "MP3 文件可以上传到 Scratch 吗？", options: ["可以", "不可以", "只能用 WAV", "只能录音"], correctOptionIndex: 0 }
    ]
  },
  // LEVEL 4: EVENTS
  {
    id: 4,
    title: "Level 4：事件触发器",
    category: BlockCategory.Events,
    learn: {
      title: "认识黄色「事件」积木",
      description: "程序的开始！",
      exampleBlock: { id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' },
      explanation: "事件积木是「帽子」形状的，必须放在代码的最上面。它们决定了代码什么时候开始运行（点击绿旗、按下按键、收到消息等）。"
    },
    practice: [
      {
        instruction: "1. 绿旗启动。",
        initialBlocks: ['GAP', { id: 'm1', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'e1',
        options: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'e_space', text: '当按下 空格 键', category: BlockCategory.Events, type: 'hat' }, { id: 'c_wait', text: '等待 1 秒', category: BlockCategory.Control, type: 'stack' }]
      },
      {
        instruction: "2. 键盘控制：空格键。",
        initialBlocks: ['GAP', { id: 's_jump', text: '播放声音 跳跃', category: BlockCategory.Sound, type: 'stack' }],
        missingBlockId: 'e_space',
        options: [{ id: 'e_space', text: '当按下 空格 键', category: BlockCategory.Events, type: 'hat' }, { id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'e_backdrop', text: '当背景换成...', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "3. 鼠标互动：点击角色。",
        initialBlocks: ['GAP', { id: 'l_say', text: '别碰我！', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'e_click',
        options: [{ id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'e_flag', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 's_loud', text: '当响度 > 10', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "4. 广播消息：发送信号。",
        initialBlocks: [{ id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'e_broadcast',
        options: [{ id: 'e_broadcast', text: '广播 消息1', category: BlockCategory.Events, type: 'stack' }, { id: 'e_receive', text: '当收到 消息1', category: BlockCategory.Events, type: 'hat' }, { id: 'l_say', text: '说 消息1', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "5. 接收消息：执行命令。",
        initialBlocks: ['GAP', { id: 'm_turn', text: '右转 90 度', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'e_receive',
        options: [{ id: 'e_receive', text: '当收到 消息1', category: BlockCategory.Events, type: 'hat' }, { id: 'e_broadcast', text: '广播 消息1', category: BlockCategory.Events, type: 'stack' }, { id: 'e_flag', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "6. 广播并等待。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'e_broad_wait', text: '广播 Start 并等待', category: BlockCategory.Events, type: 'stack' }, 'GAP'],
        missingBlockId: 'l_say_done',
        options: [{ id: 'l_say_done', text: '说 完成了！', category: BlockCategory.Looks, type: 'stack' }, { id: 'e_receive', text: '当收到 Start', category: BlockCategory.Events, type: 'hat' }, { id: 'm_stop', text: '停止', category: BlockCategory.Control, type: 'cap' }]
      },
      {
        instruction: "7. 场景响应：背景改变时。",
        initialBlocks: ['GAP', { id: 'l_show', text: '显示', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'e_bg_switch',
        options: [{ id: 'e_bg_switch', text: '当背景换成 GameLevel', category: BlockCategory.Events, type: 'hat' }, { id: 'l_bg', text: '换成 GameLevel 背景', category: BlockCategory.Looks, type: 'stack' }, { id: 'e_flag', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "8. 声音控制：当响度过大。",
        initialBlocks: ['GAP', { id: 'l_say', text: '太吵了！', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'e_loudness',
        options: [{ id: 'e_loudness', text: '当 响度 > 30', category: BlockCategory.Events, type: 'hat' }, { id: 's_vol', text: '音量', category: BlockCategory.Sound, type: 'reporter' }, { id: 'e_timer', text: '当 计时器 > 10', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "9. 多线程：同一个事件多个脚本。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'm_move', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }, 'GAP'],
        missingBlockId: 'e1_dup',
        options: [{ id: 'e1_dup', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'c_wait', text: '等待 1 秒', category: BlockCategory.Control, type: 'stack' }, { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "10. 消息传递数据（模拟）：使用变量前奏。",
        initialBlocks: [{ id: 'e_receive', text: '当收到 扣血', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'l_effect',
        options: [{ id: 'l_effect', text: '将 颜色 特效增加 25', category: BlockCategory.Looks, type: 'stack' }, { id: 'e_broadcast', text: '广播', category: BlockCategory.Events, type: 'stack' }, { id: 's_meow', text: '播放声音', category: BlockCategory.Sound, type: 'stack' }]
      }
    ],
    quiz: [
      { question: "「广播消息」是用来做什么的？", options: ["播放声音", "让角色之间互相通知", "显示文字", "结束游戏"], correctOptionIndex: 1 },
      { question: "「广播并等待」和「广播」的区别？", options: ["没区别", "前者会等待接收消息的脚本执行完才继续", "前者速度更快", "后者声音更大"], correctOptionIndex: 1 },
      { question: "一个角色可以有多个「当 🏁 被点击」吗？", options: ["可以，会同时运行", "不可以，会报错", "只能有一个生效", "会随机运行一个"], correctOptionIndex: 0 },
      { question: "「当响度 > 10」需要什么权限？", options: ["麦克风", "摄像头", "位置", "不需要"], correctOptionIndex: 0 },
      { question: "消息可以发给谁？", options: ["只能自己", "只能其他角色", "所有角色（包括自己）", "只能背景"], correctOptionIndex: 2 },
      { question: "如何让游戏重新开始？", options: ["点击红灯", "点击绿旗", "关闭网页", "拔掉电源"], correctOptionIndex: 1 },
      { question: "「当按下 空格 键」可以用在？", options: ["只有选中的角色", "所有角色", "只能背景", "不能用"], correctOptionIndex: 1 },
      { question: "事件积木是什么形状？", options: ["堆栈", "帽子（圆顶）", "布尔", "报告"], correctOptionIndex: 1 },
      { question: "收到消息的角色必须？", options: ["显示出来", "在同一个图层", "有「当收到...」的积木", "播放声音"], correctOptionIndex: 2 },
      { question: "可以修改消息的名称吗？", options: ["可以", "不可以", "只能用消息1", "系统自动命名"], correctOptionIndex: 0 }
    ]
  },
  // LEVEL 5: CONTROL
  {
    id: 5,
    title: "Level 5：控制流程",
    category: BlockCategory.Control,
    learn: {
      title: "认识橙色「控制」积木",
      description: "掌握时间、循环和逻辑判断。",
      exampleBlock: { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' },
      explanation: "控制积木包括「等待」、「重复执行」、「如果...那么」等。注意 C 形积木（如重复、如果）像夹子一样，要把其他积木包在里面。"
    },
    practice: [
      {
        instruction: "1. 暂停一下：等待。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'l_say', text: '你好', category: BlockCategory.Looks, type: 'stack' }, 'GAP', { id: 'l_say', text: '再见', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'c_wait',
        options: [{ id: 'c_wait', text: '等待 1 秒', category: BlockCategory.Control, type: 'stack' }, { id: 'c_stop', text: '停止', category: BlockCategory.Control, type: 'cap' }, { id: 'm_wait', text: '移动', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "2. 有限循环：重复 10 次。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'c_repeat',
        options: [{ id: 'c_repeat', text: '重复执行 10 次', category: BlockCategory.Control, type: 'c-block' }, { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, { id: 'c_if', text: '如果...那么', category: BlockCategory.Control, type: 'c-block' }]
      },
      {
        instruction: "3. 无限循环：一直旋转。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'm_turn',
        options: [{ id: 'm_turn', text: '右转 15 度', category: BlockCategory.Motion, type: 'stack', indent: true }, { id: 'c_wait', text: '等待', category: BlockCategory.Control, type: 'stack' }, { id: 'e_flag', text: '点击绿旗', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "4. 条件判断：如果碰到鼠标。",
        initialBlocks: [{ id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, 'GAP', { id: 'l_say', text: '碰到我了！', category: BlockCategory.Looks, type: 'stack', indent: true }],
        missingBlockId: 'c_if',
        options: [{ id: 'c_if', text: '如果 碰到鼠标指针 那么', category: BlockCategory.Control, type: 'c-block', indent: true }, { id: 'c_repeat', text: '重复 10 次', category: BlockCategory.Control, type: 'c-block', indent: true }, { id: 'c_wait_until', text: '等待直到', category: BlockCategory.Control, type: 'stack', indent: true }]
      },
      {
        instruction: "5. 双向判断：如果...否则。",
        initialBlocks: [{ id: 'c_if_else', text: '如果 按下空格 那么', category: BlockCategory.Control, type: 'c-block' }, { id: 'l_say', text: '跳！', category: BlockCategory.Looks, type: 'stack', indent: true }, 'GAP', { id: 'l_say', text: '站立', category: BlockCategory.Looks, type: 'stack', indent: true }],
        missingBlockId: 'c_else',
        options: [{ id: 'c_else', text: '否则', category: BlockCategory.Control, type: 'c-block' }, { id: 'c_stop', text: '停止', category: BlockCategory.Control, type: 'cap' }, { id: 'm_move', text: '移动', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "6. 等待直到：直到按下鼠标。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP', { id: 'm_move', text: '移动 100 步', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'c_wait_until',
        options: [{ id: 'c_wait_until', text: '等待直到 按下鼠标？', category: BlockCategory.Control, type: 'stack' }, { id: 'c_wait', text: '等待 1 秒', category: BlockCategory.Control, type: 'stack' }, { id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }]
      },
      {
        instruction: "7. 重复直到：走到边缘。",
        initialBlocks: ['GAP', { id: 'm_move', text: '移动 5 步', category: BlockCategory.Motion, type: 'stack', indent: true }],
        missingBlockId: 'c_repeat_until',
        options: [{ id: 'c_repeat_until', text: '重复执行直到 碰到边缘', category: BlockCategory.Control, type: 'c-block' }, { id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, { id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }]
      },
      {
        instruction: "8. 停止脚本。",
        initialBlocks: [{ id: 'c_if', text: '如果 碰到 炸弹', category: BlockCategory.Control, type: 'c-block' }, { id: 'l_say', text: 'Game Over', category: BlockCategory.Looks, type: 'stack', indent: true }, 'GAP'],
        missingBlockId: 'c_stop_all',
        options: [{ id: 'c_stop_all', text: '停止 全部脚本', category: BlockCategory.Control, type: 'cap', indent: true }, { id: 'c_wait', text: '等待', category: BlockCategory.Control, type: 'stack' }, { id: 'e_broadcast', text: '广播', category: BlockCategory.Events, type: 'stack' }]
      },
      {
        instruction: "9. 克隆体：制造分身。",
        initialBlocks: [{ id: 'c_repeat', text: '重复执行 10 次', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'c_create_clone',
        options: [{ id: 'c_create_clone', text: '克隆 自己', category: BlockCategory.Control, type: 'stack', indent: true }, { id: 'l_stamp', text: '图章', category: BlockCategory.Looks, type: 'stack' }, { id: 'e_flag', text: '绿旗', category: BlockCategory.Events, type: 'hat' }]
      },
      {
        instruction: "10. 克隆体启动。",
        initialBlocks: ['GAP', { id: 'm_rand', text: '移到 随机位置', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'c_start_clone',
        options: [{ id: 'c_start_clone', text: '当作为克隆体启动时', category: BlockCategory.Control, type: 'hat' }, { id: 'e_flag', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'c_del_clone', text: '删除此克隆体', category: BlockCategory.Control, type: 'cap' }]
      }
    ],
    quiz: [
      { question: "「重复执行」和「重复执行 10 次」的区别？", options: ["前者永远不停，后者只做 10 次", "没区别", "前者快，后者慢", "后者更耗电"], correctOptionIndex: 0 },
      { question: "「等待 1 秒」的作用？", options: ["让程序暂停一下", "停止程序", "让角色消失", "加速"], correctOptionIndex: 0 },
      { question: "「如果...那么」积木需要放入什么形状的积木？", options: ["堆栈", "六边形(布尔)", "椭圆(报告)", "帽子"], correctOptionIndex: 1 },
      { question: "克隆体上限通常是多少？", options: ["300", "10", "无限", "100"], correctOptionIndex: 0 },
      { question: "删除克隆体应该用？", options: ["隐藏", "删除此克隆体", "停止脚本", "移动到 0,0"], correctOptionIndex: 1 },
      { question: "「重复执行直到...」什么时候停止？", options: ["条件成立时(True)", "条件不成立时(False)", "永远不", "按空格时"], correctOptionIndex: 0 },
      { question: "在「如果」里面再放一个「如果」叫什么？", options: ["嵌套", "堆叠", "循环", "错误"], correctOptionIndex: 0 },
      { question: "停止脚本的积木是什么形状？", options: ["平底(Cap)", "凹口", "圆顶", "尖底"], correctOptionIndex: 0 },
      { question: "所有克隆体都会响应「当绿旗点击」吗？", options: ["不会，只有本体响应", "会", "看情况", "只有第一个"], correctOptionIndex: 0 },
      { question: "「停止 该角色的其他脚本」会？", options: ["停止当前脚本", "停止当前角色除了这个脚本以外的所有脚本", "停止所有", "暂停"], correctOptionIndex: 1 }
    ]
  },
  // LEVEL 6: OPERATORS
  {
    id: 6,
    title: "Level 6：运算大师",
    category: BlockCategory.Operators,
    learn: {
      title: "认识绿色「运算」积木",
      description: "处理数字、文字和逻辑。",
      exampleBlock: { id: 'o_add', text: '1 + 1', category: BlockCategory.Operators, type: 'reporter' },
      explanation: "运算积木通常是椭圆形（返回数字或文字）或六边形（返回真或假）。你可以用它们做加减乘除、比较大小、生成随机数等。"
    },
    practice: [
      {
        instruction: "1. 简单的加法。",
        initialBlocks: [{ id: 'l_say', text: '说', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'o_add',
        options: [{ id: 'o_add', text: '1 + 1', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_gt', text: '50 > 10', category: BlockCategory.Operators, type: 'boolean' }, { id: 'm_x', text: 'x 坐标', category: BlockCategory.Motion, type: 'reporter' }]
      },
      {
        instruction: "2. 随机数：随机移动。",
        initialBlocks: [{ id: 'm_goto', text: '移到 x: 0 y:', category: BlockCategory.Motion, type: 'stack' }, 'GAP'],
        missingBlockId: 'o_rand',
        options: [{ id: 'o_rand', text: '在 1 和 100 间随机选一个数', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_join', text: '连接 apple 和 banana', category: BlockCategory.Operators, type: 'reporter' }, { id: 's_loud', text: '响度', category: BlockCategory.Sensing, type: 'reporter' }]
      },
      {
        instruction: "3. 比较大小：大于。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, 'GAP', { id: 'l_say', text: '太大了', category: BlockCategory.Looks, type: 'stack', indent: true }],
        missingBlockId: 'o_gt',
        options: [{ id: 'o_gt', text: '大小 > 100', category: BlockCategory.Operators, type: 'boolean' }, { id: 'o_add', text: '10 + 10', category: BlockCategory.Operators, type: 'reporter' }, { id: 'l_costume', text: '造型编号', category: BlockCategory.Looks, type: 'reporter' }]
      },
      {
        instruction: "4. 逻辑与：同时满足。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'o_and',
        options: [{ id: 'o_and', text: '按下鼠标? 与 碰到颜色红色?', category: BlockCategory.Operators, type: 'boolean' }, { id: 'o_or', text: '或', category: BlockCategory.Operators, type: 'boolean' }, { id: 'o_not', text: '不成立', category: BlockCategory.Operators, type: 'boolean' }]
      },
      {
        instruction: "5. 逻辑或：满足其一。",
        initialBlocks: [{ id: 'c_repeat_until', text: '重复直到', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'o_or',
        options: [{ id: 'o_or', text: '碰到边缘? 或 碰到 炸弹?', category: BlockCategory.Operators, type: 'boolean' }, { id: 'o_and', text: '与', category: BlockCategory.Operators, type: 'boolean' }, { id: 'm_pos', text: 'x坐标', category: BlockCategory.Motion, type: 'reporter' }]
      },
      {
        instruction: "6. 连接字符串：说话。",
        initialBlocks: [{ id: 'l_say', text: '说', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'o_join',
        options: [{ id: 'o_join', text: '连接 得分： 和 100', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_add', text: '10 + 10', category: BlockCategory.Operators, type: 'reporter' }, { id: 's_name', text: '造型名称', category: BlockCategory.Looks, type: 'reporter' }]
      },
      {
        instruction: "7. 取余数：判断奇偶。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, { id: 'o_eq', text: 'GAP = 0', category: BlockCategory.Operators, type: 'boolean' }],
        missingBlockId: 'o_mod',
        options: [{ id: 'o_mod', text: '10 除以 2 的余数', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_div', text: '10 / 2', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_round', text: '四舍五入 10.5', category: BlockCategory.Operators, type: 'reporter' }]
      },
      {
        instruction: "8. 四舍五入。",
        initialBlocks: [{ id: 'l_say', text: '说', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'o_round',
        options: [{ id: 'o_round', text: '四舍五入 3.7', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_abs', text: '绝对值 -10', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_add', text: '3 + 7', category: BlockCategory.Operators, type: 'reporter' }]
      },
      {
        instruction: "9. 包含字符？",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'o_contains',
        options: [{ id: 'o_contains', text: 'apple 包含 p ?', category: BlockCategory.Operators, type: 'boolean' }, { id: 'o_join', text: '连接', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_len', text: 'apple 的字符数', category: BlockCategory.Operators, type: 'reporter' }]
      },
      {
        instruction: "10. 字符长度。",
        initialBlocks: [{ id: 'c_repeat', text: '重复', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'o_len',
        options: [{ id: 'o_len', text: '单词 的字符数', category: BlockCategory.Operators, type: 'reporter' }, { id: 'o_letter', text: 'apple 的第 1 个字符', category: BlockCategory.Operators, type: 'reporter' }, { id: 'm_x', text: 'x', category: BlockCategory.Motion, type: 'reporter' }]
      }
    ],
    quiz: [
      { question: "「1 + 1」积木是什么形状？", options: ["椭圆(报告)", "六边形(布尔)", "堆栈", "帽子"], correctOptionIndex: 0 },
      { question: "「50 > 10」返回什么？", options: ["true (真)", "false (假)", "60", "40"], correctOptionIndex: 0 },
      { question: "「随机选一个数 1 到 10」可能选到 10 吗？", options: ["可以", "不可以", "只能到 9", "看运气"], correctOptionIndex: 0 },
      { question: "「连接 hello 和 world」结果是？", options: ["helloworld", "hello world (带空格)", "hello+world", "2"], correctOptionIndex: 0 },
      { question: "「不成立」积木的作用？", options: ["反转真假", "删除积木", "停止程序", "没有任何作用"], correctOptionIndex: 0 },
      { question: "「10 除以 3 的余数」是多少？", options: ["1", "3", "0", "3.33"], correctOptionIndex: 0 },
      { question: "如果要判断x是否在1到10之间？", options: ["x > 1 与 x < 10", "x > 1 或 x < 10", "x = 5", "1 < x < 10"], correctOptionIndex: 0 },
      { question: "四舍五入 3.5 是？", options: ["4", "3", "3.5", "0"], correctOptionIndex: 0 },
      { question: "「apple 的第 1 个字符」是？", options: ["a", "p", "le", "1"], correctOptionIndex: 0 },
      { question: "六边形积木可以放入椭圆形孔吗？", options: ["不可以", "可以，通常作为变量名", "可以，通常作为 false 或 1/0", "只能放六边形孔"], correctOptionIndex: 0 } 
    ]
  },
  // LEVEL 7: VARIABLES
  {
    id: 7,
    title: "Level 7：超级变变变量",
    category: BlockCategory.Variables,
    learn: {
      title: "认识橙色「变量」积木",
      description: "存储分数、生命值等数据。",
      exampleBlock: { id: 'v_my', text: '我的变量', category: BlockCategory.Variables, type: 'reporter' },
      explanation: "变量就像一个盒子，里面可以装数字或文字。你可以随时查看盒子里的东西，或者修改它。常用来做计分器、计时器。"
    },
    practice: [
      {
        instruction: "1. 建立变量：读取变量值。",
        initialBlocks: [{ id: 'l_say', text: '说', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 'v_score',
        options: [{ id: 'v_score', text: '分数', category: BlockCategory.Variables, type: 'reporter' }, { id: 'o_rand', text: '随机数', category: BlockCategory.Operators, type: 'reporter' }, { id: 'm_x', text: 'x坐标', category: BlockCategory.Motion, type: 'reporter' }]
      },
      {
        instruction: "2. 初始化：游戏开始设为 0。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'v_set',
        options: [{ id: 'v_set', text: '将 分数 设为 0', category: BlockCategory.Variables, type: 'stack' }, { id: 'v_change', text: '将 分数 增加 1', category: BlockCategory.Variables, type: 'stack' }, { id: 'm_set_x', text: '将 x 设为 0', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "3. 加分：增加变量值。",
        initialBlocks: [{ id: 'e_click', text: '当角色被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP', { id: 's_play', text: '播放声音 Coin', category: BlockCategory.Sound, type: 'stack' }],
        missingBlockId: 'v_change',
        options: [{ id: 'v_change', text: '将 分数 增加 1', category: BlockCategory.Variables, type: 'stack' }, { id: 'v_set', text: '将 分数 设为 1', category: BlockCategory.Variables, type: 'stack' }, { id: 'l_size', text: '将大小增加 1', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "4. 扣血：减少变量。",
        initialBlocks: [{ id: 'c_if', text: '如果 碰到 敌人', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'v_change_neg',
        options: [{ id: 'v_change_neg', text: '将 生命值 增加 -1', category: BlockCategory.Variables, type: 'stack', indent: true }, { id: 'v_set', text: '将 生命值 设为 0', category: BlockCategory.Variables, type: 'stack', indent: true }, { id: 'c_stop', text: '停止', category: BlockCategory.Control, type: 'cap', indent: true }]
      },
      {
        instruction: "5. 显示变量：让玩家看到。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'v_show',
        options: [{ id: 'v_show', text: '显示变量 分数', category: BlockCategory.Variables, type: 'stack' }, { id: 'v_hide', text: '隐藏变量 分数', category: BlockCategory.Variables, type: 'stack' }, { id: 'l_show', text: '显示', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "6. 隐藏变量：剧情时隐藏。",
        initialBlocks: [{ id: 'e_receive', text: '当收到 剧情开始', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'v_hide',
        options: [{ id: 'v_hide', text: '隐藏变量 UI', category: BlockCategory.Variables, type: 'stack' }, { id: 'v_show', text: '显示变量 UI', category: BlockCategory.Variables, type: 'stack' }, { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "7. 使用变量控制速度。",
        initialBlocks: [{ id: 'c_forever', text: '重复执行', category: BlockCategory.Control, type: 'c-block' }, { id: 'm_move', text: '移动 GAP 步', category: BlockCategory.Motion, type: 'stack', indent: true }],
        missingBlockId: 'v_speed',
        options: [{ id: 'v_speed', text: '速度', category: BlockCategory.Variables, type: 'reporter' }, { id: 'o_rand', text: '随机数', category: BlockCategory.Operators, type: 'reporter' }, { id: 's_loud', text: '响度', category: BlockCategory.Sensing, type: 'reporter' }]
      },
      {
        instruction: "8. 列表：加入项目。",
        initialBlocks: [{ id: 'e_space', text: '当按下 空格', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'v_list_add',
        options: [{ id: 'v_list_add', text: '将 东西 加入 书包', category: BlockCategory.Variables, type: 'stack' }, { id: 'v_list_del', text: '删除 书包 的第 1 项', category: BlockCategory.Variables, type: 'stack' }, { id: 'v_set', text: '设为', category: BlockCategory.Variables, type: 'stack' }]
      },
      {
        instruction: "9. 检查列表长度。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, { id: 'o_gt', text: 'GAP > 5', category: BlockCategory.Operators, type: 'boolean' }],
        missingBlockId: 'v_list_len',
        options: [{ id: 'v_list_len', text: '书包 的项目数', category: BlockCategory.Variables, type: 'reporter' }, { id: 'v_score', text: '分数', category: BlockCategory.Variables, type: 'reporter' }, { id: 'o_len', text: '字符数', category: BlockCategory.Operators, type: 'reporter' }]
      },
      {
        instruction: "10. 云变量：最高分（模拟）。",
        initialBlocks: [{ id: 'c_if', text: '如果 分数 > ☁️最高分', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'v_set_cloud',
        options: [{ id: 'v_set_cloud', text: '将 ☁️最高分 设为 分数', category: BlockCategory.Variables, type: 'stack', indent: true }, { id: 'v_set', text: '将 分数 设为 ☁️最高分', category: BlockCategory.Variables, type: 'stack', indent: true }, { id: 'c_stop', text: '停止', category: BlockCategory.Control, type: 'cap' }]
      }
    ],
    quiz: [
      { question: "变量可以存什么？", options: ["数字和文字", "只能存数字", "只能存文字", "只能存图片"], correctOptionIndex: 0 },
      { question: "「将 变量 增加 1」是什么意思？", options: ["变量值 +1", "变量值变成 1", "创建一个新变量", "删除变量"], correctOptionIndex: 0 },
      { question: "云变量有什么特殊之处？", options: ["可以存在服务器上，所有人共享", "长得像云", "只能存天气", "没有区别"], correctOptionIndex: 0 },
      { question: "「适用于所有角色」的变量叫？", options: ["全局变量", "私有变量", "本地变量", "系统变量"], correctOptionIndex: 0 },
      { question: "列表(List)和变量的区别？", options: ["列表可以存多个数据", "变量可以存多个数据", "没区别", "列表只能存数字"], correctOptionIndex: 0 },
      { question: "如果不「显示变量」，变量还在工作吗？", options: ["在工作", "不在工作", "被删除了", "暂停了"], correctOptionIndex: 0 },
      { question: "变量名可以重复吗？", options: ["不可以", "可以", "私有和全局可以同名", "看运气"], correctOptionIndex: 2 },
      { question: "如何清空一个列表？", options: ["删除列表的全部项目", "将列表设为 0", "隐藏列表", "无法清空"], correctOptionIndex: 0 },
      { question: "「我的变量」是默认有的吗？", options: ["是", "不是", "要付费", "随机"], correctOptionIndex: 0 },
      { question: "在这个关卡中，我们用变量做了什么？", options: ["计分/生命值", "画画", "播音乐", "以上都是"], correctOptionIndex: 0 }
    ]
  },
  // LEVEL 8: SENSING
  {
    id: 8,
    title: "Level 8：敏锐的侦测",
    category: BlockCategory.Sensing,
    learn: {
      title: "认识青色「侦测」积木",
      description: "感知周围的环境。",
      exampleBlock: { id: 's_touch', text: '碰到 鼠标指针？', category: BlockCategory.Sensing, type: 'boolean' },
      explanation: "侦测积木让角色「看到」、「听到」和「感觉」到。比如碰到墙壁、按下键盘、鼠标位置、询问玩家问题。"
    },
    practice: [
      {
        instruction: "1. 碰撞检测：碰到鼠标。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 's_touch',
        options: [{ id: 's_touch', text: '碰到 鼠标指针？', category: BlockCategory.Sensing, type: 'boolean' }, { id: 's_key', text: '按下 空格 键？', category: BlockCategory.Sensing, type: 'boolean' }, { id: 'o_eq', text: '50 = 50', category: BlockCategory.Operators, type: 'boolean' }]
      },
      {
        instruction: "2. 颜色检测：走出迷宫。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, 'GAP', { id: 'm_bounce', text: '移动 -10 步', category: BlockCategory.Motion, type: 'stack', indent: true }],
        missingBlockId: 's_color',
        options: [{ id: 's_color', text: '碰到颜色 ⬛️ ？', category: BlockCategory.Sensing, type: 'boolean' }, { id: 's_touch', text: '碰到 鼠标？', category: BlockCategory.Sensing, type: 'boolean' }, { id: 's_ask', text: '询问', category: BlockCategory.Sensing, type: 'stack' }]
      },
      {
        instruction: "3. 距离感应：离得太近。",
        initialBlocks: [{ id: 'c_wait_until', text: '等待直到', category: BlockCategory.Control, type: 'stack' }, { id: 'o_lt', text: 'GAP < 50', category: BlockCategory.Operators, type: 'boolean' }],
        missingBlockId: 's_dist',
        options: [{ id: 's_dist', text: '到 鼠标指针 的距离', category: BlockCategory.Sensing, type: 'reporter' }, { id: 'm_y', text: 'y 坐标', category: BlockCategory.Motion, type: 'reporter' }, { id: 's_loud', text: '响度', category: BlockCategory.Sensing, type: 'reporter' }]
      },
      {
        instruction: "4. 提问与回答。",
        initialBlocks: ['GAP', { id: 'l_say', text: '说 回答 2 秒', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 's_ask',
        options: [{ id: 's_ask', text: '询问 你的名字？ 并等待', category: BlockCategory.Sensing, type: 'stack' }, { id: 'l_say', text: '说 你的名字？', category: BlockCategory.Looks, type: 'stack' }, { id: 's_ans', text: '回答', category: BlockCategory.Sensing, type: 'reporter' }]
      },
      {
        instruction: "5. 使用回答。",
        initialBlocks: [{ id: 's_ask', text: '询问 1+1=？', category: BlockCategory.Sensing, type: 'stack' }, { id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, { id: 'o_eq', text: 'GAP = 2', category: BlockCategory.Operators, type: 'boolean' }],
        missingBlockId: 's_ans',
        options: [{ id: 's_ans', text: '回答', category: BlockCategory.Sensing, type: 'reporter' }, { id: 's_username', text: '用户名', category: BlockCategory.Sensing, type: 'reporter' }, { id: 'v_score', text: '分数', category: BlockCategory.Variables, type: 'reporter' }]
      },
      {
        instruction: "6. 按键检测（不用事件帽）。",
        initialBlocks: [{ id: 'c_if', text: '如果', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 's_key',
        options: [{ id: 's_key', text: '按下 空格 键？', category: BlockCategory.Sensing, type: 'boolean' }, { id: 's_mouse', text: '按下鼠标？', category: BlockCategory.Sensing, type: 'boolean' }, { id: 's_touch', text: '碰到边缘？', category: BlockCategory.Sensing, type: 'boolean' }]
      },
      {
        instruction: "7. 鼠标位置跟随（X轴）。",
        initialBlocks: [{ id: 'c_forever', text: '重复', category: BlockCategory.Control, type: 'c-block' }, { id: 'm_set_x', text: '将 x 设为 GAP', category: BlockCategory.Motion, type: 'stack', indent: true }],
        missingBlockId: 's_mouse_x',
        options: [{ id: 's_mouse_x', text: '鼠标的 x', category: BlockCategory.Sensing, type: 'reporter' }, { id: 's_mouse_y', text: '鼠标的 y', category: BlockCategory.Sensing, type: 'reporter' }, { id: 'm_x', text: 'x 坐标', category: BlockCategory.Motion, type: 'reporter' }]
      },
      {
        instruction: "8. 拖拽模式：允许玩家拖动。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 's_drag',
        options: [{ id: 's_drag', text: '将拖动模式设为 可拖动', category: BlockCategory.Sensing, type: 'stack' }, { id: 'm_goto', text: '移到 鼠标', category: BlockCategory.Motion, type: 'stack' }, { id: 's_ask', text: '询问', category: BlockCategory.Sensing, type: 'stack' }]
      },
      {
        instruction: "9. 获取其他角色的属性。",
        initialBlocks: [{ id: 'l_say', text: '说', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 's_of',
        options: [{ id: 's_of', text: 'Sprite1 的 x 坐标', category: BlockCategory.Sensing, type: 'reporter' }, { id: 'm_x', text: 'x 坐标', category: BlockCategory.Motion, type: 'reporter' }, { id: 's_ans', text: '回答', category: BlockCategory.Sensing, type: 'reporter' }]
      },
      {
        instruction: "10. 当前时间。",
        initialBlocks: [{ id: 'l_say', text: '说', category: BlockCategory.Looks, type: 'stack' }, 'GAP'],
        missingBlockId: 's_year',
        options: [{ id: 's_year', text: '当前 年', category: BlockCategory.Sensing, type: 'reporter' }, { id: 's_timer', text: '计时器', category: BlockCategory.Sensing, type: 'reporter' }, { id: 's_days', text: '2000年至今的天数', category: BlockCategory.Sensing, type: 'reporter' }]
      }
    ],
    quiz: [
      { question: "「碰到颜色」和「颜色碰到颜色」区别？", options: ["没区别", "前者是自己碰到环境色，后者是自己的特定颜色碰到环境色", "前者不准", "后者只能用在背景"], correctOptionIndex: 1 },
      { question: "询问框出现时，程序会？", options: ["继续运行", "暂停等待输入", "停止", "报错"], correctOptionIndex: 1 },
      { question: "「回答」积木里存的是？", options: ["上一次询问的输入", "你好", "随机数", "空"], correctOptionIndex: 0 },
      { question: "可以侦测到「响度」吗？", options: ["可以", "不可以", "只有手机可以", "需要付费"], correctOptionIndex: 0 },
      { question: "如果不设为「可拖动」，全屏模式下能拖动角色吗？", options: ["不能", "能", "看情况", "只能拖背景"], correctOptionIndex: 0 },
      { question: "「计时器」从什么时候开始计时？", options: ["打开 Scratch 时", "点击绿旗或重置计时器时", "电脑开机时", "不可预测"], correctOptionIndex: 0 }, 
      { question: "能侦测按下任意键吗？", options: ["能", "不能，只能指定键", "只能侦测空格", "只能侦测字母"], correctOptionIndex: 0 },
      { question: "侦测积木通常是什么形状？", options: ["六边形和椭圆", "堆栈", "帽子", "C形"], correctOptionIndex: 0 },
      { question: "「到...的距离」单位是？", options: ["像素(步)", "米", "厘米", "寸"], correctOptionIndex: 0 },
      { question: "可以用侦测积木做碰撞箱吗？", options: ["可以", "不可以", "太难了", "不需要"], correctOptionIndex: 0 }
    ]
  },
  // LEVEL 9: MY BLOCKS
  {
    id: 9,
    title: "Level 9：自制积木 (函数)",
    category: BlockCategory.MyBlocks,
    learn: {
      title: "认识粉红「自制」积木",
      description: "创建属于你自己的积木！",
      exampleBlock: { id: 'mb_def', text: '定义 跳跃', category: BlockCategory.MyBlocks, type: 'hat' },
      explanation: "当一段代码反复使用时，我们可以把它打包成一个「自制积木」（函数）。这样代码更整洁，修改也更方便。还可以添加参数输入哦！"
    },
    practice: [
      {
        instruction: "1. 定义一个新积木。",
        initialBlocks: ['GAP', { id: 'm_move', text: '移动 10 步', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'mb_def',
        options: [{ id: 'mb_def', text: '定义 初始化', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'e_flag', text: '绿旗', category: BlockCategory.Events, type: 'hat' }, { id: 'c_forever', text: '重复', category: BlockCategory.Control, type: 'c-block' }]
      },
      {
        instruction: "2. 调用自制积木。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'mb_call',
        options: [{ id: 'mb_call', text: '初始化', category: BlockCategory.MyBlocks, type: 'stack' }, { id: 'mb_def', text: '定义 初始化', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'l_say', text: '说 初始化', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "3. 带参数的积木：跳高。",
        initialBlocks: [{ id: 'mb_def_p', text: '定义 跳 (高度)', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'm_y', text: '将 y 增加 GAP', category: BlockCategory.Motion, type: 'stack' }],
        missingBlockId: 'mb_arg',
        options: [{ id: 'mb_arg', text: '高度', category: BlockCategory.MyBlocks, type: 'reporter' }, { id: 'v_var', text: '变量', category: BlockCategory.Variables, type: 'reporter' }, { id: 'o_rand', text: '10', category: BlockCategory.Operators, type: 'reporter' }]
      },
      {
        instruction: "4. 调用带参数的积木。",
        initialBlocks: [{ id: 'e_space', text: '当按下 空格', category: BlockCategory.Events, type: 'hat' }, 'GAP'],
        missingBlockId: 'mb_call_arg',
        options: [{ id: 'mb_call_arg', text: '跳 (100)', category: BlockCategory.MyBlocks, type: 'stack' }, { id: 'mb_call', text: '跳', category: BlockCategory.MyBlocks, type: 'stack' }, { id: 'm_move', text: '移动 100', category: BlockCategory.Motion, type: 'stack' }]
      },
      {
        instruction: "5. 绘制正方形：重复利用。",
        initialBlocks: [{ id: 'mb_def_sq', text: '定义 画正方形', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'c_repeat', text: '重复 4 次', category: BlockCategory.Control, type: 'c-block' }, 'GAP'],
        missingBlockId: 'm_move_turn',
        options: [{ id: 'm_move_turn', text: '移动 50, 右转 90', category: BlockCategory.Motion, type: 'stack', indent: true }, { id: 'm_move', text: '移动 50', category: BlockCategory.Motion, type: 'stack', indent: true }, { id: 'm_turn', text: '右转 90', category: BlockCategory.Motion, type: 'stack', indent: true }]
      },
      {
        instruction: "6. 运行时不刷新屏幕（加速）。",
        initialBlocks: [{ id: 'mb_def_fast', text: '定义 快速绘图', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'l_say', text: '画完了！', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'note_fast',
        options: [{ id: 'note_fast', text: '提示：勾选「运行时不刷新屏幕」', category: BlockCategory.MyBlocks, type: 'cap' }, { id: 'c_wait', text: '等待', category: BlockCategory.Control, type: 'stack' }, { id: 'e_broadcast', text: '广播', category: BlockCategory.Events, type: 'stack' }]
      },
      {
        instruction: "7. 整理代码：主程序。",
        initialBlocks: [{ id: 'e1', text: '当 🏁 被点击', category: BlockCategory.Events, type: 'hat' }, { id: 'mb_init', text: '重置', category: BlockCategory.MyBlocks, type: 'stack' }, { id: 'mb_game', text: '游戏循环', category: BlockCategory.MyBlocks, type: 'stack' }, 'GAP'],
        missingBlockId: 'mb_end',
        options: [{ id: 'mb_end', text: '结束画面', category: BlockCategory.MyBlocks, type: 'stack' }, { id: 'mb_def', text: '定义', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'c_forever', text: '重复', category: BlockCategory.Control, type: 'c-block' }]
      },
      {
        instruction: "8. 递归（高级）：自己调用自己。",
        initialBlocks: [{ id: 'mb_def_r', text: '定义 分形', category: BlockCategory.MyBlocks, type: 'hat' }, 'GAP'],
        missingBlockId: 'mb_call_r',
        options: [{ id: 'mb_call_r', text: '分形', category: BlockCategory.MyBlocks, type: 'stack' }, { id: 'mb_stop', text: '停止', category: BlockCategory.Control, type: 'stack' }, { id: 'l_hide', text: '隐藏', category: BlockCategory.Looks, type: 'stack' }]
      },
      {
        instruction: "9. 字符串输入参数。",
        initialBlocks: [{ id: 'mb_def_s', text: '定义 说话 (内容)', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'l_say', text: '说 GAP 2 秒', category: BlockCategory.Looks, type: 'stack' }],
        missingBlockId: 'mb_arg_s',
        options: [{ id: 'mb_arg_s', text: '内容', category: BlockCategory.MyBlocks, type: 'reporter' }, { id: 's_ans', text: '回答', category: BlockCategory.Sensing, type: 'reporter' }, { id: 'v_text', text: '文字变量', category: BlockCategory.Variables, type: 'reporter' }]
      },
      {
        instruction: "10. 布尔输入参数。",
        initialBlocks: [{ id: 'mb_def_b', text: '定义 检查 (是否通过)', category: BlockCategory.MyBlocks, type: 'hat' }, { id: 'c_if', text: '如果 GAP 那么', category: BlockCategory.Control, type: 'c-block' }],
        missingBlockId: 'mb_arg_b',
        options: [{ id: 'mb_arg_b', text: '是否通过', category: BlockCategory.MyBlocks, type: 'boolean' }, { id: 'o_eq', text: '1=1', category: BlockCategory.Operators, type: 'boolean' }, { id: 'v_b', text: '布尔变量', category: BlockCategory.Variables, type: 'reporter' }]
      }
    ],
    quiz: [
      { question: "为什么要使用自制积木？", options: ["为了让代码更短、更好读", "为了让积木颜色更好看", "为了增加游戏难度", "没有用"], correctOptionIndex: 0 },
      { question: "自制积木可以有输入（参数）吗？", options: ["可以", "不可以", "只能有数字", "只能有文字"], correctOptionIndex: 0 },
      { question: "「运行时不刷新屏幕」有什么用？", options: ["让动作瞬间完成（加速）", "省电", "隐藏角色", "暂停游戏"], correctOptionIndex: 0 },
      { question: "定义积木的「帽子」能删掉吗？", options: ["如果删掉，调用它的积木就会失效", "可以随意删", "会自动生成", "没影响"], correctOptionIndex: 0 },
      { question: "可以在一个自制积木里调用另一个自制积木吗？", options: ["可以", "不可以", "会爆炸", "只能调用一次"], correctOptionIndex: 0 },
      { question: "自制积木能跨角色使用吗？", options: ["不能，通常是私有的", "能，所有角色通用", "只能在背景用", "看心情"], correctOptionIndex: 0 },
      { question: "参数「标签」是什么意思？", options: ["仅仅是说明文字，不起作用", "变量名", "密码", "按钮"], correctOptionIndex: 0 },
      { question: "递归（自己调用自己）如果不加停止条件会？", options: ["死循环/卡死", "自动停止", "没什么", "通关"], correctOptionIndex: 0 },
      { question: "自制积木属于哪个类别？", options: ["自制积木(粉红)", "运动", "控制", "事件"], correctOptionIndex: 0 },
      { question: "修改了定义，所有调用的地方会变吗？", options: ["会自动更新行为", "不会，要重写", "会报错", "不知道"], correctOptionIndex: 0 }
    ]
  }
];