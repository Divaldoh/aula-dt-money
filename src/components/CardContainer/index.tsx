import { Card } from "../Card";

export function CardContainer(){
    return (
        <div className="flex justify-between">
          <Card title="Entradas" value={17400} type="income" />
          <Card title="Saídas" value={1259} type="outcome" />
          <Card title="Total" value={16141} type="total" />
        </div>
    )
}