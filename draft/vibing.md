由于重名问题，gpui、gpui-ts、gpui-js都已经不可用，请将这个项目名改为zed-gpui

---

根据main子包的样子新建一个unplugin风格的插件，这个插件是专门用来修剪zed-gpui的。它的目标是，检测打包代码中所有用到的 zed-gpui 增强方法。由于方法非常多，因此要：1、检测哪些方法完全没用到；2、在打包业务代码碰到 zed-gpui的时候，删除这些没用到的方法定义。 ——这样就达到了特质化树摇优化，缩减成品的目标。

---
优化树摇打包器，要求：
1、依然保持，对于没有用到的增强函数就删除它
2、但是，HTMLElement的on和off函数不要删除，因为其他注册用到了它
3、现在增加了很多特定元素的增强方法，可以精确确认类型后再精确删除

请你说说你对需求的理解

---
优化：
1. 我写了enhance函数来减少运行时大小，并改写了packages/main/src/core/a.ts文件，请你改写core里其他文件；
2. 同步更新treeshake的逻辑。并且增加一个新规则，如果产物里有`enhance(p,{})`（但可能打包后名字不再叫做enhance），第二个入参为{}，则去掉 `enhance(p,{})`这一项

---
1、像声明块中那样给实现的地方加上`// #region` 块
2、readme要介绍treeshake子包，说明它会自动裁剪未使用的方法。还要介绍新增的函数式编程方法
3、完成1、2后，说说你觉得还有没有可以补上的函数式方法

---

我发现有个别方法，在html、svg、mathml中都存在
比如attr_ style_ 等等。我希望你将它们梳理成interface CommonFunctional，写入packages/main/src/core/types.ts中。

---
1、测试发现class_也可公用，你加上；
2、这些函数如果实现上也是一样的话，那么将它们的实现统一写入packages/main/src/core/types.ts的implementation对象；
3、在使用enhance函数的时候，即可简化为`$_(要加强的类,implementation,独有的实现对象)`
