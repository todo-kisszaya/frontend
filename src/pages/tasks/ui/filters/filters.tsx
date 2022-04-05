import {Tabs} from "antd";
import {Dispatch, useCallback} from "react";

const {TabPane} = Tabs;

export interface FiltersInterface {
    completed?: boolean
}

interface Props {
    filters: FiltersInterface,
    setFilters: Dispatch<FiltersInterface>
}

export const Filters = ({filters, setFilters}: Props) => {

    const toggleFilters = useCallback((key: string) => {
        if (key === 'all') setFilters({})
        else if (key === 'completed') setFilters({completed: true})
        else setFilters({completed: false})
    }, [])

    return <Tabs defaultActiveKey="all" onChange={toggleFilters}>
        <TabPane tab="Все таски" key="all"/>
        <TabPane tab="Выполненные" key="completed"/>
        <TabPane tab="Не выполненные" key="not completed"/>
    </Tabs>
}