import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';


@Component({
  selector: 'test-dynamic-component',
  templateUrl: './test-dynamic-component.component.html',
  styleUrls: ['./test-dynamic-component.component.scss']
})
export class TestDynamicComponentComponent implements OnInit {

  //dyncontainer页面绑定的 div , 占位符
  @ViewChild("dyncontainer", { read: ViewContainerRef })
  dyncontainer: ViewContainerRef;
  //声明变量   类型<类泛型>
  comp1: ComponentRef<ChildOneComponent>
  comp2: ComponentRef<ChildOneComponent>

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  // 在 ngAfterContentInit 组件还未完毕的时候 手动操作
  ngAfterContentInit() {
    //resolveComponentFactory 反射
    const childComp = this.resolver.resolveComponentFactory(ChildOneComponent);
    //将新生成的 组件赋值给变量(创建组件)
    this.comp1 = this.dyncontainer.createComponent(childComp);
    //提供第二个参数 ,用来标志它是第几个显示
    this.comp2 = this.dyncontainer.createComponent(childComp,0);
    //更改子组件的title
    //动态创建出来的 组件无法使用 input 方式 传值
    this.comp1.instance.title = "父组件动态赋值的标题";
    //监听 子组件emit的事件
    //这里的 subscribe(订阅) 是 rxjs
    this.comp1.instance.myEvent.subscribe((data) => {
      console.log(data);
    });

    this.comp1.instance.myEvent2.subscribe((data)=>{
      console.log(data);
    })
  }

  //删除 动态创建的  组件
  public delComp():void{
    //destory 破坏
    this.comp1.destroy();
  }



}
