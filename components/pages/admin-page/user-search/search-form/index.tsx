import React from 'react'
import { Input, FormInstance, Form } from 'antd'
import ClickableIcon from '@components/clickable-icon'

const { Search } = Input

type SearchFormType = {
    onSearchHandler: (values: FormValues) => void
    onResetHandler: () => void
    canBeReset: boolean
    form: FormInstance<FormValues>
}

type FormValues = {
    activityTypes: string
}

const SearchForm: React.FC<SearchFormType> = ({
    onSearchHandler,
    onResetHandler,
    canBeReset,
    form,
}) => {
    return (
        <Form<FormValues> form={form} onFinish={onSearchHandler}>
            <Form.Item name="activityTypes">
                <Search
                    placeholder="Vyhledejte hráče"
                    size="large"
                    onSearch={form.submit}
                    addonBefore={
                        canBeReset ? (
                            <ClickableIcon icon="clear" onClick={onResetHandler} />
                        ) : undefined
                    }
                />
            </Form.Item>
        </Form>
    )
}

export default SearchForm
