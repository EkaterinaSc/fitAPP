import '../trainers_list.scss';

export interface IFilter {
    trainerName: string;
    isActive: boolean;
    forMan: boolean;
    forWoman: boolean;
    showAll: boolean;
}

interface IProps {
    filter: IFilter,
    setFilter: (filter: IFilter) => void,
}

export const SearchTrainer = ({filter, setFilter} : IProps ) => {
    const showAllHandler = (e: any) => {
        e.preventDefault();
        setFilter({...filter, showAll: !filter.showAll});
    }

    return (
        <div>
            <form className='search'>
                <div className="form-group">
                    <div className="input-group">
                        <label htmlFor="name">Имя тренера </label>
                        <input type="text" name='name' value={filter.trainerName}
                               onChange={(e) => setFilter({...filter, trainerName: e.target.value, showAll: false})}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="isActive">Можно записаться сегодня</label>
                        <input type="checkbox" name='isActive' checked={filter.isActive}
                               onChange={(e) => setFilter({...filter, isActive: e.target.checked, showAll: false})}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="forMan">Тренировки для мужчин</label>
                        <input type="checkbox" name='forMan' checked={filter.forMan}
                               onChange={(e) => setFilter({...filter, forMan: e.target.checked, showAll: false})}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="forWoman">Тренировки для женщин</label>
                        <input type="checkbox" name='forWoman' checked={filter.forWoman}
                               onChange={(e) => setFilter({...filter, forWoman: e.target.checked, showAll: false})}/>
                    </div>
                </div>
                <button className='showBtn' onClick={showAllHandler}>Показать всех</button>
            </form>
        </div>
    )
}