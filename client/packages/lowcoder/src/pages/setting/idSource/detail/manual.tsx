import { default as Button } from "antd/es/button";
import { ManualWapper } from "pages/setting/idSource/styledComponents";
import { trans } from "i18n";
import { SyncManualIcon } from "lowcoder-design";
import { useState } from "react";
import { validateResponse } from "api/apiUtils";
import { AuthType } from "@lowcoder-ee/pages/setting/idSource/idSourceConstants";
import IdSourceApi from "api/idSourceApi";
import { messageInstance } from "lowcoder-design/src/components/GlobalInstances";

export const Manual = (props: { type: AuthType }) => {
  const [manualLoading, setManualLoading] = useState(false);
  const syncManual = () => {
    setManualLoading(true);
    IdSourceApi.syncManual(props.type)
      .then((resp) => {
        if (validateResponse(resp)) {
          messageInstance.success(trans("idSource.syncManualSuccess"));
        }
      })
      .catch((e) => messageInstance.error(e.message))
      .finally(() => setManualLoading(false));
  };
  return (
    <ManualWapper>
      <div>{trans("idSource.manual")}</div>
      {trans("idSource.manualTip") && <div className="tip">{trans("idSource.manualTip")}</div>}
      <Button icon={<SyncManualIcon />} loading={manualLoading} onClick={() => syncManual()}>
        {trans("idSource.syncManual")}
      </Button>
    </ManualWapper>
  );
};
