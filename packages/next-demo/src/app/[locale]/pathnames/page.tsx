import { LayoutPage } from 'components/LayoutPage';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function PathnamesPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('PathnamesPage');

  return (
    <LayoutPage title={t('title')}>
      <div className="max-w-[490px] text-white">
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </div>
    </LayoutPage>
  );
}
