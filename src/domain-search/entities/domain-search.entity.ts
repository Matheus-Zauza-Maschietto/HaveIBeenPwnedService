import { DomainBreachDto } from '../dto/domain-breach.dto';

export class DomainSearch {
  public title: string;
  public date: Date;
  public type: string = 'Domain Breach Search';
  public text: string;

  constructor(breachInfo: DomainBreachDto, email: string) {
    this.title = `${email} vazado por ${breachInfo.Title}`;
    this.date = new Date(breachInfo.BreachDate);
    this.text = `Houve um fazamento no domínio ${breachInfo.Domain} em ${breachInfo.BreachDate} que afetou ${breachInfo.PwnCount} contas. A seguinte conta de e-mail foi comprometida: ${email}, tendo sido vazada as seguintes informações: ${breachInfo.DataClasses.join(', ')}.`;
  }
}
