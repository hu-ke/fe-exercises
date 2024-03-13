import { useState, useEffect } from "react";
import { Button } from "antd";

async function getTestData() {
  const res = await fetch("https://api.alibaba.com/test-data");
  return res.json();
}

type Response = {
    msg: string,
    code: 200,
    data: any
}

type Service = () => Promise<Response>

function useRequest(service: Service) {
  // 请实现这个自定义 hook
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState("")

  const request = async() => {
    setLoading(true)
    try {
        if (typeof service !== 'function') {
            throw new Error('service should be a function.')
        }
        let d = await service()
        setData(d)
    } catch(e) {
        setError(e.msg)
    } finally {
        setLoading(false)
    }
  }

  return {
    data,
    loading,
    error,
    run: request,
  };
}

export function Demo() {
  const { data, loading, error, run } = useRequest(getTestData);

  if (loading) return "正在请求数据...";

  if (error) return `请求异常：${error}`;

  return (
    <div>
      <div>请求结果：</div>
      <div>{JSON.stringify(data)}</div>
      <Button onClick={run}>刷新数据</Button>
    </div>
  );
}