
### �������

 - �������֮��Ľ�����@Input/@Ouput/ģ�����/@ViewChild)

 - �Ǹ������֮��Ľ�����Service/localStorage)

 - ���������� Session��·�ɲ���������ͨѶ����չ���Լ������� 
 
 
 
ͨ��  @ViewChild 

ͨ��	Service/localStorage


----------------------
����� ���� �� �������

����һ��

ͨ�� ҳ���
<child #child></child>
<button (click)="child.childFn()">childFn</button>





��������

��Ҫ ViewChild ֧��
import { ViewChild, AfterViewInit} from '@angular/core'

//����  ChildComponent
import { ChildComponent } from './child/child.component';

//ͨ�� ViewChild ����

@ViewChild(ChildComponent)
private childComponent:ChildComponent;

//ҳ��������ִ��  (��������)
ngAfterViewInit(){
	this.childComponent.childFn();
}