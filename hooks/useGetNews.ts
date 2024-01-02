import { useMemo } from 'react'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

function useGetNews() {
  const { tHome } = useTranslateFunctions()
  const NEWS = useMemo(
    () => [
      {
        desc: tHome('news.timeLine.start'),
        data: new Date('09.01.2022'),
      },
      {
        desc: tHome('news.timeLine.startRequirements'),
        data: new Date('09.01.2022'),
      },
      {
        desc: tHome('news.timeLine.startImplementation'),
        data: new Date('09.10.2022'),
      },
      {
        desc: tHome('news.timeLine.startApplicationModel'),
        data: new Date('03.25.2023'),
      },
      {
        desc: tHome('news.timeLine.completionOfApplicationModel'),
        data: new Date('05.28.2023'),
      },
      {
        desc: tHome('news.timeLine.deliveryAllRequirements'),
      },
      {
        desc: tHome('news.timeLine.endImplementation'),
      },
      {
        desc: tHome('news.timeLine.startOfBussinessRequests'),
      },
      {
        desc: tHome('news.timeLine.endOfBussinessRequests'),
      },
      {
        desc: tHome('news.timeLine.end'),
      },
    ],
    [tHome]
  )

  return { news: NEWS }
}

export default useGetNews
